import React from 'react'
import { createClient } from '@/prismicio';

import NavBar from '@/components/NavBar';

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  
  return (
    <header className="top-0 z-50 mx-8 w-[96%] md:sticky">
      <NavBar settings={settings} />
    </header>
  );
}