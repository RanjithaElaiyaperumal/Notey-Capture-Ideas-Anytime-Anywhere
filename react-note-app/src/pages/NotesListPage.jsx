// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const NotesListPage = () => {
//   const [notes, setNotes] = useState([]);
//   const [searchQuery, setSearchQuery] = useState(""); // Search state

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/notes/")
//       .then((res) => {
//         console.log("Fetched Notes:", res.data);
//         setNotes(res.data);
//       })
//       .catch((err) => console.log(err.message));
//   }, []);

//   // ✅ Filtering Notes based on Search Query
//   const filteredNotes = notes.filter((note) =>
//     note.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       {/* 🔎 Search Input */}
//       <input
//         type="text"
//         placeholder="Search notes..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />

//       {/* ✅ Display Filtered Notes */}
//       {filteredNotes.length === 0 ? (
//         <p>No notes found.</p>
//       ) : (
//         filteredNotes.map((note) => (
//           <div key={note.id}>
//             <h3>{note.title}</h3>
//             <p>{note.body.substring(0, 100)}...</p>
//             <Link to={`/note/${note.id}`}>View Details</Link>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default NotesListPage;
