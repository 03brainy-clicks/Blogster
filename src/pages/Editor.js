/**
 * The Editor component is a React component that provides a text editor interface for creating and
 * editing blog content.
 * @returns The Editor component is returning a JSX structure that represents the editor interface.
 */
import {
  faArrowLeft,
  faRocket,
  faSave,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef, useContext } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Context from "../context/Context";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Editor = () => {
  // Accessing values from the Context
  const {
    topicList,
    handleSaveBlog,
    currentBlog,
    handleResetBlog,
    activeTone,
    setActiveTone,
  } = useContext(Context);

  const HTTP = "http://localhost:4000/chat";

  // State variables
  const [text, setText] = useState(
    currentBlog?.content ? currentBlog.content : ""
  );
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const editorRef = useRef(null);

  const { topicId } = useParams();

  const currentTopic = topicList.find((item) => item.topicId === topicId);

  // Editor text handler
  const handleTextChange = (value) => {
    setText(value);
  };

  // Save functionality
  const handleSave = (e) => {
    e.preventDefault();
    if (activeTone) {
      let blogDetails = {
        topic: currentTopic?.topic,
        content: text,
        tone: activeTone,
      };
      handleSaveBlog(blogDetails);
      toast.success("Blog Saved");
    } else {
      toast.error("Please select tone");
    }
  };

  // Publish functionality
  const handlePublish = () => {
    navigate(`/preview/${topicId}`);
  };

  // Image upload handler
  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = (event) => {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result.split(",")[1];
          // Extract the base64 string without the data:image/*;base64 prefix
          const imageUrl = `data:${file.type};base64,${base64String}`;

          const quill = editorRef.current.getEditor();
          const range = quill.getSelection();
          const cursorPosition = range ? range.index : 0;
          quill.insertEmbed(cursorPosition, "image", imageUrl);
          quill.setSelection(cursorPosition + 1);
        };
        reader.readAsDataURL(file);
      }
    };
  };

  // Back functionality
  const handleBack = () => {
    handleResetBlog();
    setActiveTone(false);
    navigate("/dashboard");
  };

  // AI generate
  const handleAI = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(`${HTTP}`, {
        prompt: `
        Write a blog post about ${
          currentTopic.topic
        } and explore its significance in ${currentTopic.tags.map(
          (item) => item.tag
        )}. Discuss key aspects, benefits, and challenges related to ${
          currentTopic.topic
        }. Provide informative insights, practical tips, and real-life examples to engage and educate readers. Conclude the blog by highlighting the long-term impact of ${
          currentTopic.topic
        } and its relevance in our ever-changing world
       `,
      })
      .then((res) => {
        const data = res.data.split("\n\n").map((item, i) => {
          if (i >= 1) {
            return `<p>${item}</p><br/>`;
          }
          return null;
        });
        setIsLoading(false);
        setText(data.join(""));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const quill = editorRef.current.getEditor();
    if (quill) {
      const toolbar = quill.getModule("toolbar");
      toolbar.addHandler("image", imageHandler);
    }
  }, []);

  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col justify-between gap-7">
      {/* Header */}
      <div
        className="bg-white flex justify-between p-3 items-center gap-7"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <div className="flex">
          <button
            onClick={handleBack}
            className="py-2 px-3 transition duration-300 text-xs font-semibold text-gray-500 rounded hover:text-black"
          >
            <FontAwesomeIcon icon={faArrowLeft} />{" "}
            <span className="sm:inline hidden">Back</span>
          </button>
        </div>

        <div className="border overflow-hidden py-2 px-4 text-xs flex-1 font-medium rounded text-center line-clamp-1">
          <span className="line-clamp-1">{currentTopic.topic}</span>
        </div>
        <div className="flex gap-2">
          {/* Tone selection */}
          <select
            onChange={(e) => setActiveTone(e.target.value)}
            value={activeTone}
            className="py-2 text-xs px-3 border border-black text-black bg-white font-semibold rounded outline-none"
          >
            <option className="hidden">Select Tone</option>
            <option value="Formal">Formal</option>
            <option value="Casual">Casual</option>
          </select>
          {/* AI Generative button */}
          <button
            onClick={handleAI}
            className="btn py-2  px-3 text-xs font-semibold text-white rounded flex gap-1 items-center"
          >
            {isLoading ? (
              <>
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="inline w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
                <span className="hidden sm:inline">Generating</span>
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faWandMagicSparkles} />
                <span className="hidden sm:inline"> AI Generate</span>
              </>
            )}
          </button>
          {/* Save button */}
          <button
            onClick={handleSave}
            className="btn py-2  px-3 text-xs font-semibold text-white rounded"
          >
            <FontAwesomeIcon icon={faSave} />
            <span className="hidden sm:inline"> Save</span>
          </button>

          {/* Publish button */}
          <button
            onClick={handlePublish}
            className="btn py-2  px-3 text-xs font-semibold text-white rounded"
          >
            <FontAwesomeIcon icon={faRocket} />
            <span className="hidden sm:inline"> Publish</span>
          </button>
        </div>
      </div>

      {/* Editor */}
      <div
        className="lg:w-8/12 md:w-9/12 w-11/12 mx-auto  relative flex-1 overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <ReactQuill
          ref={editorRef}
          value={text}
          onChange={handleTextChange}
          className="h-full bg-white rounded overflow-y-scroll"
          modules={{
            toolbar: {
              container: [
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ["bold", "italic", "underline"],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ align: [] }],
                ["link", "image"],
                ["clean"],
                [{ color: [] }],
              ],
            },
          }}
          placeholder="Add a description of your event"
          id="txtDescription"
        />
      </div>

      {/* Footer */}
      <div className="p-4 bg-white text-xs text-center text-gray-500 font-medium">
        <span>
          Created by{" "}
          <a
            href="https://github.com/03brainy-clicks/speedyAssignment"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black"
          >
            Chandrakant Kushwah
          </a>
        </span>
      </div>
    </div>
  );
};

export default Editor;
