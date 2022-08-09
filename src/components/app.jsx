import React from "react";
import Header from "./header";
import Note from "./note";
import Footer from "./footer";
import Notes from "../Notes";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        {Notes.map((newNote) => (
          <Note
            key={newNote.key}
            title={newNote.title}
            content={newNote.content}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}
