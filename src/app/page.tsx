import Head from 'next/head';
import React from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>AI @ DsCubed</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header>
        <h1>AI @ DsCubed</h1>
        <h2>Intelligence at your fingertips</h2>
      </header>

      <main>
        <p>
          We are a visionary branch of DSCubed, specializing in the transformative fields of Artificial Intelligence and Generative AI. Our mission is to empower the University of Melbourne’s students to harness emerging AI technologies, unlocking endless possibilities for innovation and discovery.
        </p>

        <h3>What we’re working on:</h3>
        <p>
          <strong>llmgine:</strong> A versatile modular framework designed to build production-ready large language model (LLM) applications with unmatched customizability.
        </p>
        <p>
          <strong>Darcy:</strong> DSCubed’s dynamic AI assistant, now streamlining tasks between Discord and Notion, with more cutting-edge features soon to launch.
        </p>

        <h3>What we offer:</h3>
        <ul>
          <li>Cutting-edge AI resources and continuous news updates</li>
          <li>A passionate, supportive community of AI enthusiasts</li>
          <li>Advanced techniques and tools for technical users</li>
          <li>User-friendly AI solutions for non-technical individuals</li>
          <li>AI-powered strategies to boost your academic and research performance</li>
        </ul>

        <p>
          Step into the future of intelligence and help shape the future of AI at the University of Melbourne.
        </p>

        <h3>Sign up with just one click</h3>
        <p>Your student email:</p>
        <form>
          <input type="email" placeholder="Enter your student email" required />
          <button type="submit">Submit</button>
        </form>
        <p>We will be in touch.</p>
      </main>
    </>
  );
}


