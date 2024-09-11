"use client";

import React, { useState} from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Download, ExternalLink, Linkedin, Mail, GraduationCap, Menu } from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "AI Voice Over and Script Generator for Youtube",
      description: "This project is a Streamlit application that leverages various AI models to generate YouTube scripts and voiceovers. It aims to assist content creators in producing high-quality YouTube videos with minimal effort.",
      image: "/images/fulls/voice-ai.jpeg",
      link: "https://github.com/AjayK47/AI-Youtube-Voice-Over-and-Script-Generator"
    },
    {
      title: "Gemma Model Finetuning Using Lora",
      description: "This repository contains code and data for fine-tuning a small language model (SLM) tailored for Indian history. It showcases adapting a pre-trained language model to understand and generate text specific to this historical context.",
      image: "/images/fulls/gemma.webp",
      link: "https://github.com/AjayK47/Gemma-Model-Finetuning-Using-Lora"
    },
    {
      title: "Web Page ChatBot using Llama index",
      description: "Web Page Q&A Chatbot is a Streamlit web application designed to interactively answer questions based on web page data. The chatbot utilizes different Language Models (LLMS) such as Hugging Face Gemini or OpenAI to provide accurate and context-aware responses.",
      image: "/images/fulls/webchatbot.png",
      link: "https://github.com/AjayK47/Web-ChatBot-using-Llama-index"
    },
    {
      title: "Gemini-File with Llama-Index",
      description: "Gemini-File is a Streamlit web application that allows users to upload PDF files, index their contents using the Gemini search engine from the Llama-Index library, and query the documents.",
      image: "/images/fulls/Gemini.jpg",
      link: "https://github.com/AjayK47/Gemini-File"
    },
    {
      title: "Face Emotion Detection using CNN",
      description: "This project involves training a Convolutional Neural Network (CNN) for facial expression recognition using the FER2013 dataset. The trained model can predict emotions (Angry, Fear, Happy, Sad, Surprise) from facial images.",
      image: "/images/fulls/face.jpg",
      link: "https://github.com/AjayK47/Face-Emotion-Detection_CNN"
    },
    {
      title: "Boston Housing Price Prediction using Regression",
      description: "Involves predicting the median housing cost in different areas in Boston based on various input features ,with uses a machine learning Regression model trained on the Boston Housing dataset.",
      image: "/images/fulls/housing.jpg",
      link: "https://github.com/AjayK47/Boston-Hosuing-Prediction-and-Deployment-"
    },
    {
      title: "Fruits/Veggies classifications using Inception V3 & integrating with Google Palm API",
      description: "This project utilizes a finely tuned InceptionV3 model to identify vegetables or fruits in uploaded images, providing nutritional information. Integrated with the Google Generative AI API (Palm), it generates intriguing facts about the recognized produce.",
      image: "/images/fulls/palm.png",
      link: "https://github.com/AjayK47/image-classification-with-inceptioV3-and-Google-Palm"
    },
    {
      title: "Email Spam Detector using NLTK and ML",
      description: "This project implements a simple email spam detection system using two machine learning models: Multinomial Naive Bayes (NB) and Support Vector Machine (SVM). It utilizes natural language processing techniques to classify emails as spam or non-spam.",
      image: "/images/fulls/Email.jpg",
      link: "https://github.com/AjayK47/EmailSpamDetector-using-NLTK-and-ML"
    },
    {
      title: "Web Scraping using Autoscrapper",
      description: "Using Autoscrapper to web scrape data from Flipkart.",
      image: "/images/fulls/web_scrapping.png",
      link: "https://github.com/AjayK47/Webscrapping"
    }
  ]

  const certifications = [
    {
      name: " AI and ML Externship Certificate, Google Developers",
      link: "https://smartinternz.com/internships/google_developers/185317219bbdc2991a9e6f518affd353"
    },
    {
      name: "LMOPS1x: Introduction to Generative AI, EDX",
      link: "https://courses.edx.org/certificates/82896b3f96514a9babac7ae1117aa20d"
    },
  ]

  const publications = [
    {
      title: "Multimodal Approach to Emotion Recognition using Deep Learning - (ICIMIA) · Dec 23, 2023",
      description: "A multimodal deep learning approach integrates facial expression and text features for robust emotion recognition, outperforming traditional and single-modality methods.",
      link: "https://ieeexplore.ieee.org/document/10426592"
    },
    {
      title: "Multimodal Approach to Emotion Recognition using Deep Learning - (ICIMIA) · Dec 23, 2023",
      description: "A multimodal deep learning approach integrates facial expression and text features for robust emotion recognition, outperforming traditional and single-modality methods.",
      link: "https://ieeexplore.ieee.org/document/10426592"
    },
    {
      title: "Paddy Crop Disease Detection using LeNet and MobileNet Models - 2024 (INDIACom)",
      description: "The paper focuses on the automated detection of rice leaf diseases using deep learning techniques to improve agricultural disease control methods , also explore the different models perfomance in this area",
      link: "https://ieeexplore.ieee.org/document/10498510"
    },
  ]

return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-sans">
      <header className="sticky top-0 bg-gray-800 bg-opacity-90 backdrop-blur p-4 z-10">
        <nav className="container mx-auto flex justify-between items-center">
<h1 className="text-2xl md:text-3xl font-bold font-sans text-purple-400 tracking-wide">
  Ajay Kommineni
</h1>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6 text-purple-400" />
            </Button>
          </div>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-6 text-lg font-medium`}>
            <a href="#about" className="block md:inline-block text-purple-400 hover:text-purple-300 transition-colors duration-200">About</a>
            <a href="#projects" className="block md:inline-block text-purple-400 hover:text-purple-300 transition-colors duration-200">Projects</a>
            <a href="#certifications" className="block md:inline-block text-purple-400 hover:text-purple-300 transition-colors duration-200">Certifications</a>
            <a href="#publications" className="block md:inline-block text-purple-400 hover:text-purple-300 transition-colors duration-200">Publications</a>
            <a href="#connect" className="block md:inline-block text-purple-400 hover:text-purple-300 transition-colors duration-200">Connect</a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-16 space-y-16 md:space-y-32">
        <section id="about" className="space-y-8 text-center">
          <div className="w-40 h-40 md:w-60 md:h-60 mx-auto mb-8 relative">
            <Image
              src="/images/fulls/dp.jpg"
              alt="Ajay Kommineni"
              width={300}
              height={300}
              className="rounded-full object-cover border-4 border-purple-400"
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text md:bg-clip-padding md:bg-gradient-to-r md:from-purple-600 md:to-blue-600"
          style={{ lineHeight: '1.4', paddingTop: '0.5rem' }}>
          Hello, I am Ajay Kommineni
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-gray-400">
            Gen AI Developer and an Enthusiast
          </p>
          <div className="bg-gray-800 p-4 md:p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-purple-400">About Me</h3>
            <p className="text-base md:text-lg text-gray-300">
              I am a dedicated final-year student majoring in Computer Science and Engineering at Vellore Institute of Technology, AP. I am deeply immersed in the world of Deep Learning and enthusiastic about staying updated on the latest AI trends. Currently, I am focused on building large language models (LLMs). Beyond academics, I am fascinated by space and planes and am determined to be part of the exciting progress in technology.
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
            <a href="https://drive.google.com/file/d/1DrBZPBHG8eZjlRpxOha0EI2CuQYfY9dh/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
              <Button 
                variant="outline" 
                className="w-full md:w-auto py-3 px-6 text-lg border-purple-600 bg-purple-600 text-white hover:bg-purple-100 hover:text-purple-600 transition-colors"
              >
                <Download className="mr-2 h-5 w-5" /> Download Resume
              </Button>
            </a>
            <a href="https://github.com/AjayK47" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
              <Button 
                variant="outline" 
                className="w-full md:w-auto py-3 px-6 text-lg border-blue-600 bg-blue-600 text-white hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
                <Github className="mr-2 h-5 w-5" /> GitHub Profile
              </Button>
            </a>
          </div>
        </section>

        {/* Education section */}
        <section id="education" className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-purple-400">Education</h2>
          <Card className="bg-gray-800 border-gray-700 hover:border-purple-400 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl font-bold text-blue-400">VIT AP University</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-base md:text-lg text-gray-300"><GraduationCap className="inline-block mr-2" /> BTech in Computer Science and Engineering</p>
              <p className="text-base md:text-lg text-gray-300">Specialization in AI and ML</p>
              <p className="text-base md:text-lg text-gray-400">Years of Study: 2021 - 2025</p>
              <p className="text-base md:text-lg text-gray-400">CGPA: 8.73/10</p>
            </CardContent>
          </Card>
        </section>
        
        {/* Projects section */}
        <section id="projects" className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-purple-400">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-purple-400 transition-colors flex flex-col">
                <CardHeader className="p-4">
                  <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-40 object-cover rounded-t-lg" />
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <CardTitle className="text-lg md:text-xl font-bold mb-2 text-blue-400">{project.title}</CardTitle>
                  <CardDescription className="text-sm md:text-base text-gray-400">{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-4">
                  <Button variant="outline" asChild className="w-full border-purple-600 bg-purple-600 text-white hover:bg-purple-100 hover:text-purple-600 transition-colors">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications section */}
        <section id="certifications" className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-purple-400">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-400 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl font-bold text-blue-400">{cert.name}</CardTitle>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full border-blue-600 bg-blue-600 text-white hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      View Certificate <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Publications section */}
        <section id="publications" className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-purple-400">Publications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {publications.map((pub, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:border-purple-400 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl font-bold text-blue-400">{pub.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm md:text-base text-gray-400">{pub.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full border-purple-600 bg-purple-600 text-white hover:bg-purple-100 hover:text-purple-600 transition-colors">
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">
                      Read Publication <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Connect section */}
        <section id="connect" className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-purple-400">Connect with Me</h2>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="https://www.linkedin.com/in/ajay-kommineni-1b3985224/" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
              <Button variant="outline" className="w-full md:w-auto py-3 px-6 text-lg border-blue-600 bg-blue-600 text-white hover:bg-blue-100 hover:text-blue-600 transition-colors">
                <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
              </Button>
            </a>
            <a href="https://github.com/AjayK47" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
              <Button variant="outline" className="w-full md:w-auto py-3 px-6 text-lg border-gray-600 bg-gray-600 text-white hover:bg-gray-100 hover:text-gray-600 transition-colors">
                <Github className="mr-2 h-5 w-5" /> GitHub
              </Button>
            </a>
            <a href="mailto:ajaykommineni@yahoo.com" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
              <Button variant="outline" className="w-full md:w-auto py-3 px-6 text-lg border-purple-600 bg-purple-600 text-white hover:bg-purple-100 hover:text-purple-600 transition-colors">
                <Mail className="mr-2 h-5 w-5" /> Email
              </Button>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 p-4 mt-16">
        <div className="container mx-auto text-center text-gray-500">
          <p>&copy; 2023 Ajay Kommineni. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
