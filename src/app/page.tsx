import React from "react";

import RootLayout from "@/app/layout";
import Header from "@/components/Header";

const App: React.FC = () => {
  return (
    <RootLayout>
      <div className="min-h-screen bg-muted">
        <Header
          filters={[]}
          onRemoveFilters={() => {}}
          onClearFilters={() => {}}
        />
      </div>
      <main className="container mx-auto px-4 max-w-5xl">
        {/* TODO: Add Job List */}
      </main>
    </RootLayout>
  );
};

export default App;
