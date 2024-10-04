import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaRobot } from 'react-icons/fa'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <img
            src="/images/fulls/dp.jpg"
            alt="Ajay Kommineni"
            className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
          />
          <h1 className="text-4xl font-bold mb-2">Ajay Kommineni</h1>
          <p className="text-xl text-gray-400 mb-4">Gen AI Developer and Enthusiast</p>
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href="https://www.linkedin.com/in/ajay-kommineni-1b3985224/"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="mr-2" />
              LinkedIn
            </a>
            <a
              href="https://github.com/AjayK47"
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="mr-2" />
              GitHub
            </a>
          </div>
        </header>

        <section className="mb-12 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            Final-year Computer Science and Engineering student at Vellore Institute of Technology, AP. 
            Passionate about Deep Learning, AI trends, and building large language models (LLMs). 
            My interests extend beyond tech into space exploration and aviation.
          </p>
        </section>

        <section className="mb-12 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Education</h2>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold">BTech in Computer Science and Engineering</h3>
              <p className="text-gray-400">VIT AP University</p>
              <p className="text-gray-400">Specialization: AI and ML</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400">2021 - 2025</p>
              <p className="text-gray-400">CGPA: 8.73/10</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "PagePod - Multi-Agent Web content Podcast generator",
                description: "This project uses a multi-agent framework to automatically generate podcasts from website content. It leverages the power of AI to scrape web content, refine it, create a script, and convert it to speech.",
                link: "https://github.com/AjayK47/PagePod"
              },
              {
                title: "Stock Insight Agentic Framework with Autogen",
                description: "This is a multi-agent system that uses LLM's to analyze financial data, review market news, and predict company stock performance. Built with the autogen library, it coordinates multiple agents, each assigned a specific role in processing financial information and making predictions",
                link: "https://github.com/AjayK47/Stock-Insight-Agent"
              },
              {
                title: "AI Voice Over and Script Generator for Youtube",
                description: "This project is a Streamlit application that uses various LLM models to generate YouTube scripts and voiceovers. It aims to assist content creators in producing high-quality YouTube videos with minimal effort.",
                link: "https://github.com/AjayK47/AI-Youtube-Voice-Over-and-Script-Generator"
              },
              {
                title: "Gemma Model Finetuning Using Lora",
                description: "Finetuned Google's Open source Gemma 2b model on Indian history domain using Lora technique , huggingface transformers library ",
                link: "https://github.com/AjayK47/Gemma-Model-Finetuning-Using-Lora"
              },
              {
                title: "Web Page ChatBot using Llama index",
                description: "Web Page Q&A Chatbot is a Streamlit web application designed to interactively answer questions based on web page data. The chatbot uses LLMS such as Hugging Face, Gemini or OpenAI to provide accurate and context-aware responses.",
                link: "https://github.com/AjayK47/Web-ChatBot-using-Llama-index"
              },
              {
                title: "Gemini-File with Llama-Index",
                description: "Gemini-File is a Streamlit web application that allows users to upload PDF files, index their contents using the Gemini search engine from the Llama-Index library, and query the documents.",
                link: "https://github.com/AjayK47/Gemini-File"
              },
              {
                title: "Face Emotion Detection using CNN",
                description: "A project involving training a Convolutional Neural Network (CNN) for facial expression recognition.",
                link: "https://github.com/AjayK47/Face-Emotion-Detection_CNN"
              },
              {
                title: "Boston Housing Price Prediction using Regression",
                description: "A machine learning project for predicting median housing costs in different areas of Boston. ",
                link: "https://github.com/AjayK47/Boston-Hosuing-Prediction-and-Deployment-"
              },
              {
                title: "Fruits/Veggies classifications using Inception V3 & integrating with Google Palm API",
                description: "A project that uses a fine tuned InceptionV3 model to identify vegetables or fruits in uploaded images also provide nutrition info using Google PaLM API",
                link: "https://github.com/AjayK47/image-classification-with-inceptioV3-and-Google-Palm"
              }
            ].map((project, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                </div>
                <a
                  href={project.link}
                  className="text-blue-400 hover:text-blue-300 transition duration-300 flex items-center mt-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-2" />
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Publications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Multimodal Approach to Emotion Recognition using Deep Learning",
                description: "ICIMIA (International Conference on Intelligent Machines, Innovation and Automation) · Dec 23, 2023",
                link: "https://ieeexplore.ieee.org/document/10426592"
              },
              {
                title: "Paddy Crop Disease Detection using LeNet and MobileNet Models",
                description: "INDIACom 2024",
                link: "https://ieeexplore.ieee.org/document/10498510"
              }
            ].map((publication, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{publication.title}</h3>
                  <p className="text-gray-400 mb-4">{publication.description}</p>
                </div>
                <a
                  href={publication.link}
                  className="text-blue-400 hover:text-blue-300 transition duration-300 flex items-center mt-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Publication
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Certifications</h2>
          <p className="text-gray-300 leading-relaxed">
            <ul className="list-disc list-inside">
              <li>AI and ML Externship Certificate, Google Developers</li>
              <li>LMOPS1x: Introduction to Generative AI, EDX</li>
            </ul>
          </p>
        </section>

        {/* Social Links Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Contact</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/ajay-kommineni-1b3985224/"
              className="flex items-center text-blue-400 hover:text-blue-300 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="mr-2" />
              LinkedIn
            </a>
            <a
              href="https://github.com/AjayK47"
              className="flex items-center text-blue-400 hover:text-blue-300 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="mr-2" />
              GitHub
            </a>
            <a
              href="mailto:ajaykommineni@yahoo.com"
              className="flex items-center text-blue-400 hover:text-blue-300 transition duration-300"
            >
              <FaEnvelope className="mr-2" />
              Email
            </a>
            <a
              href="https://drive.google.com/file/d/1DrBZPBHG8eZjlRpxOha0EI2CuQYfY9dh/view?usp=sharing"
              className="flex items-center text-blue-400 hover:text-blue-300 transition duration-300"
              download
            >
              <FaDownload className="mr-2" />
              Download Resume
            </a>
            <a
              href="https://huggingface.co/Ajayk"
              className="flex items-center text-blue-400 hover:text-blue-300 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaRobot className="mr-2" />
              Hugging Face
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
