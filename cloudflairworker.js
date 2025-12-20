/*
this file is the code for a cloudflair worker that uses cloudflair env variables to send emails useing mailjet 
this is the end point the contact us page goes to when sending a contact request " 
name of env variables :

MJ_FROM_EMAIL = ( email addres mailjet sends from )
MJ_TO_EMAIL = ( email addres that mailjet sends to )
MJ_API_KEY = ( mailjet API key )
MJ_API_SECRET = ( mailjet secret key )

*/

/* ===================================================
   Helpers
=================================================== */

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function jsonResponse(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders(),
    },
  });
}

async function parseJson(request) {
  try {
    return await request.json();
  } catch {
    return null;
  }
}

/* ===================================================
   Mailjet Utilities
=================================================== */

// Safe Base64 encoding (Workers-compatible)
function encodeBasicAuth(apiKey, apiSecret) {
  const encoder = new TextEncoder();
  const data = encoder.encode(`${apiKey}:${apiSecret}`);
  let binary = "";
  for (const byte of data) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary);
}

async function sendMailJetEmail(env, { fullName, email, phone, message }) {
  

  const subject = `פניה חדשה מ ${fullName}`;

  const textPart = `
  שם הפונה : ${fullName}
  פניה : ${message}

  אימייל : ${email}
  טלפון : ${phone}
  `;

  const htmlPart = `
  <!DOCTYPE html>
  <html lang="he">
    <body style="font-family: Arial, sans-serif; color: #333; direction: rtl;">
      <p><strong>שם:</strong> ${fullName}</p>

      <p>
        <strong>פניה:</strong><br>
        ${message.replace(/\n/g, "<br>")}
      </p>

      <hr>

      <p>
        <strong>אימייל:</strong>
        <a href="mailto:${email}">${email}</a>
      </p>

      <p>
        <strong>טלפון:</strong>
        <a href="tel:${phone}">${phone}</a>
      </p>
    </body>
  </html>
  `;


  const payload = {
    Messages: [
      {
        From: {
          Email: env.MJ_FROM_EMAIL,
          Name: "Barak Medical",
        },
        To: [
          {
            Email: env.MJ_TO_EMAIL,
            // Email: "96goldner@gmail.com",
            Name: "Barak Medical",
          },
        ],
        Subject: subject,
        TextPart: textPart,
        HTMLPart: htmlPart,
      },
    ],
  };

  const authHeader =
    "Basic " + encodeBasicAuth(env.MJ_API_KEY, env.MJ_API_SECRET);

  const response = await fetch("https://api.mailjet.com/v3.1/send", {
    method: "POST",
    headers: {
      Authorization: authHeader,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const text = await response.text();

  return {
    ok: response.ok,
    status: response.status,
    text,
  };
}

/* ===================================================
   Request Handlers
=================================================== */

async function handleContact(request, env) {
  const body = await parseJson(request);

  if (!body) {
    console.log("no body");
    return jsonResponse({ error: "Invalid JSON" }, 400);
  }

  const { fullName, email, phone, message } = body;

  if (!fullName || !email || !phone || !message) {
    console.log("missing fields");
    return jsonResponse(
      { error: "Missing required fields" },
      400
    );
  }

  const result = await sendMailJetEmail(env, {
    fullName,
    email,
    phone,
    message,
  });


  if (!result.ok) {
    
    console.log("result not oky");
    console.log(result);

    return jsonResponse(
      {
        error: "Mailjet send failed",
        mailjetStatus: result.status,
        mailjetResponse: result.text,
      },
      502
    );
  }


  return jsonResponse({
    success: true,
    message: "Email sent successfully",
  });
}

/* ===================================================
   Worker Entry Point
=================================================== */

export default {
  async fetch(request, env) {
    // CORS preflight

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders() });
    }

    // Health check
    if (request.method === "GET") {
      return jsonResponse({
        status: "ok",
        service: "contact-form",
        version: "5.5.6",
        timestamp: new Date().toISOString(),
      });
    }

    // Contact form submission
    if (request.method === "POST") {
      return handleContact(request, env);
    }

    return jsonResponse({ error: "Method not allowed" }, 405);
  },
};
