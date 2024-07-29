import Image from 'next/image';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Label htmlFor="input">Input</Label>
      <Input id="input" />
    </main>
  );
}
