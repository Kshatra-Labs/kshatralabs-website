"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Glitchy404 } from "@/components/ui/glitchy-404-1";

export default function NotFound() {
     return (
          <div className="min-h-screen overflow-hidden flex flex-col items-center justify-center bg-black gap-8">
               <Glitchy404 width={800} height={232} color="#fff" />
               <Button asChild variant="outline" className="text-white border-white hover:bg-white hover:text-black transition-colors uppercase font-mono tracking-widest">
                    <Link href="/">
                         RETURN TO HOME
                    </Link>
               </Button>
          </div>
     );
}
