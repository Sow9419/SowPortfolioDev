import React from 'react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto max-w-5xl py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sékou Sow.
          </p>
        </div>
      </div>
    </footer>
  );
}