import { NextResponse } from 'next/server';
import { Client } from '@microsoft/microsoft-graph-client';
import 'isomorphic-fetch';

async function getAccessToken() {
  const tenantId = process.env.M365_TENANT_ID!;
  const clientId = process.env.M365_CLIENT_ID!;
  const clientSecret = process.env.M365_CLIENT_SECRET!;

  const tokenResponse = await fetch(`https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: clientId,
      scope: 'https://graph.microsoft.com/.default',
      client_secret: clientSecret,
      grant_type: 'client_credentials',
    }),
  });

  const data = await tokenResponse.json();
  if (!data.access_token) {
    console.error('Error getting Microsoft Graph token:', data);
    throw new Error('Failed to get access token');
  }

  return data.access_token;
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const accessToken = await getAccessToken();

    const client = Client.init({
      authProvider: (done) => done(null, accessToken),
    });

    // Replace with the mailbox address where you want to receive demo requests
    const recipient = process.env.M365_RECIPIENT_EMAIL!;

    await client.api('/users/' + recipient + '/sendMail').post({
      message: {
        subject: `New RecruitAI Demo Request from ${name}`,
        body: {
          contentType: 'Text',
          content: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
        },
        toRecipients: [
          {
            emailAddress: {
              address: recipient,
            },
          },
        ],
      },
      saveToSentItems: 'false',
    });

    return NextResponse.json({ message: 'Demo request sent successfully' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
