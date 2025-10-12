// src/app/page.tsx
import React from "react";

export const metadata = {
  title: "My App",
  description: "AI recruitment — powered by X0PA",
};

export default function Page() {
  return (
    <main style={{ padding: 40, fontFamily: "Inter, system-ui, sans-serif" }}>
      <h1 style={{ fontSize: 36, marginBottom: 8 }}>Welcome</h1>
      <p style={{ fontSize: 16, marginBottom: 24 }}>
        Get started by editing <code>src/app/page.tsx</code>.
      </p>

      <section style={{ maxWidth: 760 }}>
        <h2 style={{ fontSize: 20 }}>Next steps</h2>
        <ul>
          <li>Create routes under <code>src/app/</code></li>
          <li>Import components from <code>src/components/</code></li>
          <li>Run <code>npm run dev</code> locally to preview changes</li>
        </ul>
      </section>
    </main>
  );
}
