import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navigation from "./components/Navigation.jsx";
import PromptLibrary from "./pages/PromptLibrary.jsx";
import PromptEditor from "./pages/PromptEditor.jsx";
import PromptSandbox from "./pages/PromptSandbox.jsx";
import DiscussionForums from "./pages/DiscussionForums.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/library" element={<PromptLibrary />} />
        <Route path="/editor" element={<PromptEditor />} />
        <Route path="/sandbox" element={<PromptSandbox />} />
        <Route path="/forums" element={<DiscussionForums />} />
      </Routes>
    </Router>
  );
}

export default App;
