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
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
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

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">About Me</h2>
          <p className="text-gray-300">
            Final-year student majoring in Computer Science and Engineering at Vellore Institute of Technology, AP.
            Passionate about Deep Learning, AI trends, building large language models (LLMs), space, and planes.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Education</h2>
          <div>
            <h3 className="text-xl font-semibold">BTech in Computer Science and Engineering</h3>
            <p className="text-gray-400">VIT AP University</p>
            <p className="text-gray-400">Specialization: AI and ML</p>
            <p className="text-gray-400">2021 - 2025</p>
            <p className="text-gray-400">CGPA: 8.73/10</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "AI Voice Over and Script Generator for Youtube",
                description: "A Streamlit application that leverages various AI models to generate YouTube scripts and voiceovers.",
                link: "https://github.com/AjayK47/AI-Youtube-Voice-Over-and-Script-Generator"
              },
              {
                title: "Gemma Model Finetuning Using Lora",
                description: "Code and data for fine-tuning a small language model (SLM) tailored for Indian history.",
                link: "https://github.com/AjayK47/Gemma-Model-Finetuning-Using-Lora"
              },
              {
                title: "Web Page ChatBot using Llama index",
                description: "A Streamlit web application designed to interactively answer questions based on web page data.",
                link: "https://github.com/AjayK47/Web-ChatBot-using-Llama-index"
              },
              {
                title: "Gemini-File with Llama-Index",
                description: "A Streamlit web application for uploading PDF files and querying their contents.",
                link: "https://github.com/AjayK47/Gemini-File"
              },
              {
                title: "Face Emotion Detection using CNN",
                description: "A project involving training a Convolutional Neural Network (CNN) for facial expression recognition.",
                link: "https://github.com/AjayK47/Face-Emotion-Detection_CNN"
              },
              {
                title: "Boston Housing Price Prediction using Regression",
                description: "A machine learning project for predicting median housing costs in different areas of Boston.",
                link: "https://github.com/AjayK47/Boston-Hosuing-Prediction-and-Deployment-"
              },
              {
                title: "Fruits/Veggies classifications using Inception V3 & integrating with Google Palm API",
                description: "A project that uses a finely tuned InceptionV3 model to identify vegetables or fruits in uploaded images.",
                link: "https://github.com/AjayK47/image-classification-with-inceptioV3-and-Google-Palm"
              },
              {
                title: "Email Spam Detector using NLTK and ML",
                description: "An email spam detection system using two machine learning models: Multinomial Naive Bayes (NB) and Support Vector Machine (SVM).",
                link: "https://github.com/AjayK47/EmailSpamDetector-using-NLTK-and-ML"
              },
              {
                title: "Web Scraping using Autoscrapper",
                description: "A project demonstrating web scraping techniques, focusing on scraping data from Flipkart using Autoscrapper.",
                link: "https://github.com/AjayK47/Webscrapping"
              }
            ].map((project, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-400 hover:text-blue-300 transition duration-300 flex items-center"
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
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Certifications</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>AI and ML Externship Certificate, Google Developers</li>
            <li>LMOPS1x: Introduction to Generative AI, EDX</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Publications</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Multimodal Approach to Emotion Recognition using Deep Learning</h3>
              <p className="text-gray-400">ICIMIA (International Conference on Intelligent Machines, Innovation and Automation) · Dec 23, 2023</p>
              <a
                href="https://ieeexplore.ieee.org/document/10426592"
                className="text-blue-400 hover:text-blue-300 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Publication
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Paddy Crop Disease Detection using LeNet and MobileNet Models</h3>
              <p className="text-gray-400">INDIACom 2024</p>
              <a
                href="https://ieeexplore.ieee.org/document/10498510"
                className="text-blue-400 hover:text-blue-300 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Publication
              </a>
            </div>
          </div>
        </section>

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
