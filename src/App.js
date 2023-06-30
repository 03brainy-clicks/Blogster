/**
 * The App function sets up the main structure of the web application and provides context for various
 * components.
 * @returns The App component is being returned, which contains the TopicContext.Provider component and
 * several Route components from the react-router-dom library. The TopicContext.Provider component
 * wraps around the Route components and provides a context object to its children components. The
 * Route components define the paths and corresponding components to render when the path matches the
 * URL.
 */
import { useState } from "react";
import TopicContext from "./context/Context";
import Dashboard from "./pages/Dashboard";
import Editor from "./pages/Editor";
import "react-quill/dist/quill.snow.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Preview from "./pages/Preview";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Navigation from "./components/Navigation";
import Landing from "./pages/Landing";

AOS.init();

function App() {
  const [activeState, setActiveState] = useState("all");
  const [activeTone, setActiveTone] = useState(false);
  const [topicList, setTopicList] = useState([
    // Initial topic list
    // Each topic contains a category, topicId, topic, and tags

    {
      category: "mission",
      topicId: "tm1",
      topic: "Ocean Exploration",
      tags: [
        {
          tagId: "one",
          tag: "Oceanic Ecosystems",
        },
        {
          tagId: "two",
          tag: "Marine Biodiversity",
        },
        {
          tagId: "three",
          tag: "Deep-Sea Exploration",
        },
      ],
    },
    {
      category: "mission",
      topicId: "tm2",
      topic: "Disaster Response and Relief",
      tags: [
        {
          tagId: "one",
          tag: "Emergency Preparedness",
        },
        {
          tagId: "two",
          tag: "Humanitarian Aid",
        },
        {
          tagId: "three",
          tag: "Resilient Infrastructure",
        },
      ],
    },
    {
      category: "mission",
      topicId: "tm3",
      topic: "Artificial Intelligence and Ethics",
      tags: [
        {
          tagId: "one",
          tag: "Ethical AI",
        },
        {
          tagId: "two",
          tag: "Bias Mitigation",
        },
      ],
    },
    {
      category: "product",
      topicId: "tp1",
      topic: "Product Development",
      tags: [
        {
          tagId: "one",
          tag: "Product Design",
        },
        {
          tagId: "two",
          tag: "Market Research",
        },
        {
          tagId: "three",
          tag: "Prototyping",
        },
      ],
    },
    {
      category: "product",
      topicId: "tp2",
      topic: "Product Management",
      tags: [
        {
          tagId: "one",
          tag: "Product Strategy",
        },
        {
          tagId: "two",
          tag: "Product Metrics",
        },
        {
          tagId: "three",
          tag: "Roadmapping",
        },
      ],
    },
    {
      category: "product",
      topicId: "tp3",
      topic: "Product Marketing",
      tags: [
        {
          tagId: "one",
          tag: "Go-to-Market Strategy",
        },
        {
          tagId: "two",
          tag: "Customer Acquisition",
        },
        {
          tagId: "three",
          tag: "Product Positioning",
        },
      ],
    },
    {
      category: "ICP",
      topicId: "ticp1",
      topic: "Content Personalization",
      tags: [
        {
          tagId: "one",
          tag: "Behavioral Tracking",
        },
        {
          tagId: "two",
          tag: "Recommendation Engines",
        },
        {
          tagId: "three",
          tag: "User Segmentation",
        },
      ],
    },
    {
      category: "ICP",
      topicId: "ticp2",
      topic: "Content Automation",
      tags: [
        {
          tagId: "one",
          tag: "Automated Workflows",
        },
        {
          tagId: "two",
          tag: "AI Writing Assistants",
        },
        {
          tagId: "three",
          tag: "Content Generation",
        },
      ],
    },
    {
      category: "ICP",
      topicId: "ticp3",
      topic: "Content Analytics",
      tags: [
        {
          tagId: "one",
          tag: "Performance Metrics",
        },
        {
          tagId: "two",
          tag: "Engagement Analysis",
        },
        {
          tagId: "three",
          tag: "Conversion Tracking",
        },
      ],
    },
  ]);

  const [currentBlog, setCurrentBlog] = useState("");

  // Handle topic delete
  const handleTopicDelete = (topicId) => {
    setTopicList(topicList.filter((item) => item.topicId !== topicId));
  };

  // Handle topic add
  const handleTopicAdd = (topic) => {
    setTopicList([topic, ...topicList]);
  };

  // Handle saving blog
  const handleSaveBlog = (blogData) => {
    setCurrentBlog(blogData);
  };

  // Handle resetting blog
  const handleResetBlog = () => {
    setCurrentBlog("");
  };

  return (
    <>
      <TopicContext.Provider
        value={{
          activeState,
          setActiveState,
          topicList,
          setTopicList,
          handleTopicDelete,
          handleTopicAdd,
          handleResetBlog,
          handleSaveBlog,
          currentBlog,
          activeTone,
          setActiveTone,
        }}
      >
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
        />
        <Navigation/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preview/:blogId" element={<Preview />} />
          <Route path="/editor/:topicId" element={<Editor />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </TopicContext.Provider>
    </>
  );
}

export default App;
