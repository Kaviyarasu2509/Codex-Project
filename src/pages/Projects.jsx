import React, { useEffect, useRef, useState, useMemo } from "react";
import "./Projects.css";

// ═══════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════
const YEAR   = "2026-27";
// eslint-disable-next-line no-unused-vars
const YR     = "2026";
const PHONE  = "8525999002";
// eslint-disable-next-line no-unused-vars
const PHONE_SW = "8525999022";
// eslint-disable-next-line no-unused-vars
const PHONE_HW = "8525999032";
const WA     = `https://wa.me/91${PHONE}`;
const ADDR   = "2nd Floor, Balaji Complex, 288, 2nd Street, Cross Cut Road, Gandhipuram, Coimbatore – 641012";

// ═══════════════════════════════════════════════════════════
// JSON-LD SCHEMAS
// ═══════════════════════════════════════════════════════════
const pageSchema = {
  "@context":"https://schema.org","@type":"CollectionPage",
  "name":`600+ Final Year Project Titles Coimbatore ${YEAR} – CODEX PROJECT`,
  "url":"https://www.codexproject.in/projects",
  "description":`CODEX PROJECT provides 600+ IEEE ${YEAR} final year project titles in Coimbatore for CSE, ECE, EEE, IT, MCA, Mechanical, Diploma students. AI, ML, IoT, Embedded, Web Dev, Mobile App, Blockchain. Real working models, IEEE documentation, internship certificate.`,
  "provider":{
    "@type":"LocalBusiness","@id":"https://www.codexproject.in/#organization",
    "name":"CODEX PROJECT","url":"https://www.codexproject.in",
    "telephone":`+91${PHONE}`,
    "address":{"@type":"PostalAddress","streetAddress":"2nd Floor, Balaji Complex, 288, 2nd Street, Cross Cut Road","addressLocality":"Gandhipuram, Coimbatore","addressRegion":"Tamil Nadu","postalCode":"641012","addressCountry":"IN"},
    "geo":{"@type":"GeoCoordinates","latitude":"11.0168","longitude":"76.9558"},
    "aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","ratingCount":"320"},
    "openingHours":"Mo-Sa 09:00-20:00",
  },
};

const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://www.codexproject.in/"},
    {"@type":"ListItem","position":2,"name":`Final Year Project Titles ${YEAR} Coimbatore`,"item":"https://www.codexproject.in/projects"},
  ],
};

const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":`Best final year projects Coimbatore ${YEAR}?`,"acceptedAnswer":{"@type":"Answer","text":`CODEX PROJECT offers 600+ IEEE ${YEAR} final year project titles in Coimbatore across AI/ML, IoT, Embedded, Mechanical, Web Dev, Mobile App and Blockchain domains for all branches. Call ${PHONE}.`}},
    {"@type":"Question","name":"Does CODEX PROJECT provide internship certificate?","acceptedAnswer":{"@type":"Answer","text":`Yes! Every final year project at CODEX PROJECT Coimbatore includes a FREE internship certificate along with IEEE format report, source code, PPT, and viva prep. Call ${PHONE}.`}},
    {"@type":"Question","name":`IEEE ${YEAR} project center Coimbatore?`,"acceptedAnswer":{"@type":"Answer","text":`CODEX PROJECT at Balaji Complex, Gandhipuram, Coimbatore is the best IEEE ${YEAR} project center. 600+ base papers, all branches, affordable pricing. Call ${PHONE}.`}},
    {"@type":"Question","name":"Final year project cost Coimbatore?","acceptedAnswer":{"@type":"Answer","text":`CODEX PROJECT offers the most affordable final year project pricing in Coimbatore with zero hidden charges. EMI available. Call ${PHONE} for free quote.`}},
    {"@type":"Question","name":"Which colleges does CODEX PROJECT serve?","acceptedAnswer":{"@type":"Answer","text":`CODEX PROJECT serves students from PSG Tech, CIT, KMEA, Sri Krishna, KPR, Karpagam, SNS, KGISL, RVS, Rathinam, Hindusthan, Sri Eshwar, Dr NGP, Bannari Amman, and all engineering colleges in Coimbatore, Tirupur, Erode, and Salem.`}},
    {"@type":"Question","name":"Ready made projects Coimbatore?","acceptedAnswer":{"@type":"Answer","text":`Yes! CODEX PROJECT has ready-made final year projects deliverable within 1-3 days with complete documentation and internship certificate. Call ${PHONE} for available titles.`}},
  ],
};

// ═══════════════════════════════════════════════════════════
// 900+ PROJECT TITLES (EXPANDED)
// ═══════════════════════════════════════════════════════════
const ALL = [
  // AI & ML (Original 1-50)
  {id:1,  name:"Drowsiness Detection System",               cat:"AI & ML",   tag:"Computer Vision", dept:"CSE/IT"},
  {id:2,  name:"Brain Tumor Detection – CNN MRI",            cat:"AI & ML",   tag:"Deep Learning",   dept:"CSE/IT"},
  {id:3,  name:"Crop Disease Detection – ResNet",            cat:"AI & ML",   tag:"CNN / Python",    dept:"CSE/IT"},
  {id:4,  name:"Fake News Detection – BERT",                 cat:"AI & ML",   tag:"NLP",             dept:"CSE/IT"},
  {id:5,  name:"Face Recognition Attendance System",         cat:"AI & ML",   tag:"Deep Learning",   dept:"CSE/IT"},
  {id:6,  name:"Stock Price Prediction – LSTM",              cat:"AI & ML",   tag:"Data Science",    dept:"CSE/IT"},
  {id:7,  name:"Sentiment Analysis – Twitter BERT",          cat:"AI & ML",   tag:"NLP",             dept:"CSE/IT"},
  {id:8,  name:"Medical Image Segmentation – U-Net",         cat:"AI & ML",   tag:"Deep Learning",   dept:"CSE/IT"},
  {id:9,  name:"Object Detection – YOLO v8 Real-Time",       cat:"AI & ML",   tag:"Computer Vision", dept:"CSE/IT"},
  {id:10, name:"Customer Churn Prediction – ML",             cat:"AI & ML",   tag:"Data Science",    dept:"CSE/IT"},
  {id:11, name:"Credit Card Fraud Detection – ML",           cat:"AI & ML",   tag:"Data Science",    dept:"CSE/IT"},
  {id:12, name:"Sign Language Recognition – CNN",            cat:"AI & ML",   tag:"Computer Vision", dept:"CSE/IT"},
  {id:13, name:"Breast Cancer Detection – CNN",              cat:"AI & ML",   tag:"Deep Learning",   dept:"CSE/IT"},
  {id:14, name:"Text Summarization – Transformer",           cat:"AI & ML",   tag:"NLP",             dept:"CSE/IT"},
  {id:15, name:"Human Activity Recognition – LSTM",          cat:"AI & ML",   tag:"Deep Learning",   dept:"CSE/IT"},
  {id:16, name:"Lung Disease Classification – X-Ray",        cat:"AI & ML",   tag:"Deep Learning",   dept:"CSE/IT"},
  {id:17, name:"Generative AI Image Synthesis – GAN",        cat:"AI & ML",   tag:"Generative AI",   dept:"CSE/IT"},
  {id:18, name:"Diabetes Prediction – ML",                   cat:"AI & ML",   tag:"Data Science",    dept:"CSE/IT"},
  {id:19, name:"Network Intrusion Detection – DL",           cat:"AI & ML",   tag:"Cybersecurity",   dept:"CSE/IT"},
  {id:20, name:"Pneumonia Detection – X-Ray CNN",            cat:"AI & ML",   tag:"Deep Learning",   dept:"CSE/IT"},
  {id:21, name:"Deepfake Face Detection",                    cat:"AI & ML",   tag:"Computer Vision", dept:"CSE/IT"},
  {id:22, name:"Emotion Recognition from Speech",            cat:"AI & ML",   tag:"NLP / Audio",     dept:"CSE/IT"},
  {id:23, name:"Autonomous Driving Simulation – DL",         cat:"AI & ML",   tag:"Deep Learning",   dept:"CSE/IT"},
  {id:24, name:"House Price Prediction – ML",                cat:"AI & ML",   tag:"Data Science",    dept:"CSE/IT"},
  {id:25, name:"Resume Parser System – NLP",                 cat:"AI & ML",   tag:"NLP",             dept:"CSE/IT"},
  {id:26, name:"AI Healthcare Chatbot – GPT API",            cat:"AI & ML",   tag:"NLP / GenAI",     dept:"CSE/IT"},
  {id:27, name:"Skin Cancer Detection – CNN",                cat:"AI & ML",   tag:"Deep Learning",   dept:"CSE/IT"},
  {id:28, name:"Real-Time Pose Estimation",                  cat:"AI & ML",   tag:"Computer Vision", dept:"CSE/IT"},
  {id:29, name:"Wildfire Prediction – Satellite ML",         cat:"AI & ML",   tag:"Data Science",    dept:"CSE/IT"},
  {id:30, name:"Malware Detection – ML",                     cat:"AI & ML",   tag:"Cybersecurity",   dept:"CSE/IT"},
  {id:31, name:"Kidney Disease Detection – ML",              cat:"AI & ML",   tag:"Deep Learning",   dept:"CSE/IT"},
  {id:32, name:"Road Damage Detection – CNN",                cat:"AI & ML",   tag:"Computer Vision", dept:"CSE/IT"},
  {id:33, name:"Employee Attrition Prediction",              cat:"AI & ML",   tag:"Data Science",    dept:"CSE/IT"},
  {id:34, name:"Image Super Resolution – SRGAN",             cat:"AI & ML",   tag:"Generative AI",   dept:"CSE/IT"},
  {id:35, name:"Traffic Flow Optimization – ML",             cat:"AI & ML",   tag:"Smart City",      dept:"CSE/IT"},
  {id:36, name:"Plant Disease Detection – CNN",              cat:"AI & ML",   tag:"Agriculture AI",  dept:"CSE/IT"},
  {id:37, name:"Alzheimer Disease Prediction",               cat:"AI & ML",   tag:"Deep Learning",   dept:"CSE/IT"},
  {id:38, name:"Hate Speech Detection – NLP",                cat:"AI & ML",   tag:"NLP",             dept:"CSE/IT"},
  {id:39, name:"Drug Discovery AI – ML",                     cat:"AI & ML",   tag:"Healthcare AI",   dept:"CSE/IT"},
  {id:40, name:"Solar Energy Output Prediction",             cat:"AI & ML",   tag:"Data Science",    dept:"CSE/IT"},
  {id:41, name:"ECG Arrhythmia Detection – CNN",             cat:"AI & ML",   tag:"Healthcare AI",   dept:"CSE/IT"},
  {id:42, name:"Vehicle Number Plate Recognition",           cat:"AI & ML",   tag:"Computer Vision", dept:"CSE/IT"},
  {id:43, name:"Age and Gender Detection – CNN",             cat:"AI & ML",   tag:"Computer Vision", dept:"CSE/IT"},
  {id:44, name:"Movie Recommendation System – ML",           cat:"AI & ML",   tag:"Data Science",    dept:"CSE/IT"},
  {id:45, name:"Handwriting Recognition – CNN",              cat:"AI & ML",   tag:"Computer Vision", dept:"CSE/IT"},
  {id:46, name:"Question Answering – BERT",                  cat:"AI & ML",   tag:"NLP",             dept:"CSE/IT"},
  {id:47, name:"Retinal Disease Detection – CNN",            cat:"AI & ML",   tag:"Deep Learning",   dept:"CSE/IT"},
  {id:48, name:"Satellite Image Classification",             cat:"AI & ML",   tag:"Remote Sensing",  dept:"CSE/IT"},
  {id:49, name:"Music Genre Classification – ML",            cat:"AI & ML",   tag:"Audio ML",        dept:"CSE/IT"},
  {id:50, name:"Phishing URL Detection – ML",                cat:"AI & ML",   tag:"Cybersecurity",   dept:"CSE/IT"},
  // AI & ML (New 51-80)
  {id:51, name:"Real-Time Video Summarization – Deep Learning",cat:"AI & ML",tag:"Computer Vision", dept:"CSE/IT"},
  {id:52, name:"OCR for Handwritten Documents – CNN+RNN",    cat:"AI & ML",   tag:"Deep Learning",   dept:"CSE/IT"},
  {id:53, name:"Traffic Sign Recognition – YOLO",            cat:"AI & ML",   tag:"Computer Vision", dept:"CSE/IT"},
  {id:54, name:"Heart Disease Prediction – Ensemble ML",     cat:"AI & ML",   tag:"Data Science",    dept:"CSE/IT"},
  {id:55, name:"Virtual Try-On System – GAN",                cat:"AI & ML",   tag:"Generative AI",   dept:"CSE/IT"},
  {id:56, name:"Sarcasm Detection – NLP",                    cat:"AI & ML",   tag:"NLP",             dept:"CSE/IT"},
  {id:57, name:"Automatic Image Captioning – Transformer",   cat:"AI & ML",   tag:"Deep Learning",   dept:"CSE/IT"},
  {id:58, name:"Parkinson Disease Prediction – ML",          cat:"AI & ML",   tag:"Healthcare AI",   dept:"CSE/IT"},
  {id:59, name:"Facial Expression Recognition – CNN",        cat:"AI & ML",   tag:"Computer Vision", dept:"CSE/IT"},
  {id:60, name:"Energy Consumption Forecasting – LSTM",      cat:"AI & ML",   tag:"Data Science",    dept:"CSE/IT"},
  {id:61, name:"Anomaly Detection in Videos – Autoencoder",  cat:"AI & ML",   tag:"Deep Learning",   dept:"CSE/IT"},
  {id:62, name:"Chatbot for Customer Support – Rasa",        cat:"AI & ML",   tag:"NLP",             dept:"CSE/IT"},
  {id:63, name:"Leaf Disease Detection – MobileNet",         cat:"AI & ML",   tag:"Agriculture AI",  dept:"CSE/IT"},
  {id:64, name:"Loan Approval Prediction – ML",              cat:"AI & ML",   tag:"Data Science",    dept:"CSE/IT"},
  {id:65, name:"Gesture Volume Control – OpenCV",            cat:"AI & ML",   tag:"Computer Vision", dept:"CSE/IT"},
  {id:66, name:"Suicide Ideation Detection – NLP",           cat:"AI & ML",   tag:"NLP",             dept:"CSE/IT"},
  {id:67, name:"Automatic Number Plate Recognition – YOLO",  cat:"AI & ML",   tag:"Computer Vision", dept:"CSE/IT"},
  {id:68, name:"Soil Type Classification – CNN",             cat:"AI & ML",   tag:"Agriculture AI",  dept:"CSE/IT"},
  {id:69, name:"Voice-Based Email System – Speech to Text",  cat:"AI & ML",   tag:"NLP / Audio",     dept:"CSE/IT"},
  {id:70, name:"Air Quality Prediction – ML",                cat:"AI & ML",   tag:"Data Science",    dept:"CSE/IT"},
  {id:71, name:"Fake Profile Detection – Social Media ML",   cat:"AI & ML",   tag:"Cybersecurity",   dept:"CSE/IT"},
  {id:72, name:"Hand Gesture Recognition – MediaPipe",       cat:"AI & ML",   tag:"Computer Vision", dept:"CSE/IT"},
  {id:73, name:"COVID-19 Diagnosis – X-Ray CNN",             cat:"AI & ML",   tag:"Deep Learning",   dept:"CSE/IT"},
  {id:74, name:"Recommendation System for E-Learning",       cat:"AI & ML",   tag:"Data Science",    dept:"CSE/IT"},
  {id:75, name:"Text-to-Image Synthesis – GAN",              cat:"AI & ML",   tag:"Generative AI",   dept:"CSE/IT"},
  {id:76, name:"Insurance Fraud Detection – ML",             cat:"AI & ML",   tag:"Data Science",    dept:"CSE/IT"},
  {id:77, name:"Driver Drowsiness Alert System",             cat:"AI & ML",   tag:"Computer Vision", dept:"CSE/IT"},
  {id:78, name:"Language Translation – Transformer",         cat:"AI & ML",   tag:"NLP",             dept:"CSE/IT"},
  {id:79, name:"Football Match Outcome Prediction – ML",     cat:"AI & ML",   tag:"Data Science",    dept:"CSE/IT"},
  {id:80, name:"Underwater Image Enhancement – CNN",         cat:"AI & ML",   tag:"Deep Learning",   dept:"CSE/IT"},

  // IoT (Original 101-130)
  {id:101,name:"Smart Irrigation – NodeMCU + Firebase",      cat:"IoT",       tag:"Agriculture",     dept:"ECE/EEE"},
  {id:102,name:"IoT Health Monitoring – HR & SpO2",          cat:"IoT",       tag:"Healthcare",      dept:"ECE/EEE"},
  {id:103,name:"Home Automation – ESP32 + Blynk",            cat:"IoT",       tag:"Smart Home",      dept:"ECE/EEE"},
  {id:104,name:"Smart Energy Meter – AWS IoT",               cat:"IoT",       tag:"Industrial",      dept:"ECE/EEE"},
  {id:105,name:"Air Quality Monitor – MQ + ThingSpeak",      cat:"IoT",       tag:"Environment",     dept:"ECE/EEE"},
  {id:106,name:"Smart Parking – RFID + IoT",                 cat:"IoT",       tag:"Smart City",      dept:"ECE/EEE"},
  {id:107,name:"GPS Vehicle Tracking – GSM + NodeMCU",       cat:"IoT",       tag:"Transport",       dept:"ECE/EEE"},
  {id:108,name:"Smart Waste Management – Ultrasonic",        cat:"IoT",       tag:"Smart City",      dept:"ECE/EEE"},
  {id:109,name:"Edge AI Object Detection – Raspberry Pi",    cat:"IoT",       tag:"AI + IoT",        dept:"ECE/EEE"},
  {id:110,name:"IoT Fire & Gas Detection – MQ2 + ESP32",     cat:"IoT",       tag:"Safety",          dept:"ECE/EEE"},
  {id:111,name:"Smart Water Level Monitor",                  cat:"IoT",       tag:"Automation",      dept:"ECE/EEE"},
  {id:112,name:"Wearable Fall Detection – MPU6050",          cat:"IoT",       tag:"Healthcare",      dept:"ECE/EEE"},
  {id:113,name:"LoRa Long Range Communication",              cat:"IoT",       tag:"Networking",      dept:"ECE/EEE"},
  {id:114,name:"IoT Smart Greenhouse Control",               cat:"IoT",       tag:"Agriculture",     dept:"ECE/EEE"},
  {id:115,name:"Smart Medicine Reminder – IoT App",          cat:"IoT",       tag:"Healthcare",      dept:"ECE/EEE"},
  {id:116,name:"Industrial IoT – SCADA Integration",         cat:"IoT",       tag:"Industrial",      dept:"ECE/EEE"},
  {id:117,name:"Smart Traffic Control – IoT + ML",           cat:"IoT",       tag:"Smart City",      dept:"ECE/EEE"},
  {id:118,name:"IoT Weather Station – Firebase Mobile",      cat:"IoT",       tag:"Environment",     dept:"ECE/EEE"},
  {id:119,name:"Smart Street Light – LDR + IoT",             cat:"IoT",       tag:"Smart City",      dept:"ECE/EEE"},
  {id:120,name:"Flood Detection & Alert – GSM + IoT",        cat:"IoT",       tag:"Safety",          dept:"ECE/EEE"},
  {id:121,name:"Smart Doorbell – ESP32-CAM + Mobile",        cat:"IoT",       tag:"Smart Home",      dept:"ECE/EEE"},
  {id:122,name:"IoT Soil Moisture Monitor",                  cat:"IoT",       tag:"Agriculture",     dept:"ECE/EEE"},
  {id:123,name:"Pet Tracking System – GPS + IoT",            cat:"IoT",       tag:"Consumer IoT",    dept:"ECE/EEE"},
  {id:124,name:"Anomaly Detection in IoT – ML",              cat:"IoT",       tag:"AI + IoT",        dept:"ECE/EEE"},
  {id:125,name:"Smart Baby Monitor – IoT Camera",            cat:"IoT",       tag:"Smart Home",      dept:"ECE/EEE"},
  {id:126,name:"IoT Vibration Monitor – Industry",           cat:"IoT",       tag:"Industrial",      dept:"ECE/EEE"},
  {id:127,name:"Smart Cold Chain Monitor",                   cat:"IoT",       tag:"Industrial",      dept:"ECE/EEE"},
  {id:128,name:"IoT UV Radiation Monitor",                   cat:"IoT",       tag:"Environment",     dept:"ECE/EEE"},
  {id:129,name:"Smart Aquarium – Arduino Sensors",           cat:"IoT",       tag:"Consumer IoT",    dept:"ECE/EEE"},
  {id:130,name:"Road Condition Monitor – IoT + ML",          cat:"IoT",       tag:"Smart City",      dept:"ECE/EEE"},
  // IoT (New 131-155)
  {id:131,name:"Smart Garbage Bin Monitoring System",        cat:"IoT",       tag:"Smart City",      dept:"ECE/EEE"},
  {id:132,name:"IoT Based Air Pollution Monitoring",         cat:"IoT",       tag:"Environment",     dept:"ECE/EEE"},
  {id:133,name:"Smart Mirror with News and Weather",         cat:"IoT",       tag:"Smart Home",      dept:"ECE/EEE"},
  {id:134,name:"IoT Based Liquid Level Monitoring",          cat:"IoT",       tag:"Industrial",      dept:"ECE/EEE"},
  {id:135,name:"Smart Chair Posture Correction System",      cat:"IoT",       tag:"Healthcare",      dept:"ECE/EEE"},
  {id:136,name:"IoT Smart Trolley for Shopping Malls",       cat:"IoT",       tag:"Consumer IoT",    dept:"ECE/EEE"},
  {id:137,name:"Smart Ceiling Fan – Temperature Control",    cat:"IoT",       tag:"Smart Home",      dept:"ECE/EEE"},
  {id:138,name:"IoT Based Coal Mine Safety Monitoring",      cat:"IoT",       tag:"Safety",          dept:"ECE/EEE"},
  {id:139,name:"Smart Luggage Tracker – GPS + IoT",          cat:"IoT",       tag:"Consumer IoT",    dept:"ECE/EEE"},
  {id:140,name:"IoT Based Water Quality Monitoring",         cat:"IoT",       tag:"Environment",     dept:"ECE/EEE"},
  {id:141,name:"Smart Helmet for Construction Workers",      cat:"IoT",       tag:"Safety",          dept:"ECE/EEE"},
  {id:142,name:"IoT Based Fish Tank Monitoring",             cat:"IoT",       tag:"Consumer IoT",    dept:"ECE/EEE"},
  {id:143,name:"Smart Clothes Dryer – Rain Sensor",          cat:"IoT",       tag:"Smart Home",      dept:"ECE/EEE"},
  {id:144,name:"IoT Based Warehouse Inventory System",       cat:"IoT",       tag:"Industrial",      dept:"ECE/EEE"},
  {id:145,name:"Smart Bicycle Lock – Fingerprint + IoT",     cat:"IoT",       tag:"Consumer IoT",    dept:"ECE/EEE"},
  {id:146,name:"IoT Based Noise Pollution Monitor",          cat:"IoT",       tag:"Environment",     dept:"ECE/EEE"},
  {id:147,name:"Smart Refrigerator – Inventory Tracking",    cat:"IoT",       tag:"Smart Home",      dept:"ECE/EEE"},
  {id:148,name:"IoT Based Soil Nutrient Monitoring",         cat:"IoT",       tag:"Agriculture",     dept:"ECE/EEE"},
  {id:149,name:"Smart Water Heater – Voice Control",         cat:"IoT",       tag:"Smart Home",      dept:"ECE/EEE"},
  {id:150,name:"IoT Based Railway Track Crack Detection",    cat:"IoT",       tag:"Safety",          dept:"ECE/EEE"},
  {id:151,name:"Smart Dustbin – Automatic Lid Open",         cat:"IoT",       tag:"Smart City",      dept:"ECE/EEE"},
  {id:152,name:"IoT Based Poultry Farm Monitoring",          cat:"IoT",       tag:"Agriculture",     dept:"ECE/EEE"},
  {id:153,name:"Smart Curtains – Light Sensor Automation",   cat:"IoT",       tag:"Smart Home",      dept:"ECE/EEE"},
  {id:154,name:"IoT Based Gas Leakage Detector",             cat:"IoT",       tag:"Safety",          dept:"ECE/EEE"},
  {id:155,name:"Smart Swimming Pool Monitoring System",      cat:"IoT",       tag:"Consumer IoT",    dept:"ECE/EEE"},

  // Embedded (Original 201-230)
  {id:201,name:"Smart Traffic Light Controller – 8051",      cat:"Embedded",  tag:"8051",            dept:"ECE/EEE"},
  {id:202,name:"ARM Cortex Motor Speed Controller",          cat:"Embedded",  tag:"ARM Cortex",      dept:"ECE/EEE"},
  {id:203,name:"PIC Digital Energy Meter",                   cat:"Embedded",  tag:"PIC",             dept:"ECE/EEE"},
  {id:204,name:"FPGA ALU Design – Verilog",                  cat:"Embedded",  tag:"FPGA / VLSI",     dept:"ECE/EEE"},
  {id:205,name:"Raspberry Pi Face Detection",                cat:"Embedded",  tag:"Raspberry Pi",    dept:"ECE/EEE"},
  {id:206,name:"Arduino RFID Access Control",                cat:"Embedded",  tag:"Arduino",         dept:"ECE/EEE"},
  {id:207,name:"Voice Controlled Home Automation",           cat:"Embedded",  tag:"ARM / Arduino",   dept:"ECE/EEE"},
  {id:208,name:"Smart Helmet – Accident Detection",          cat:"Embedded",  tag:"Arduino",         dept:"ECE/EEE"},
  {id:209,name:"Automatic Street Light – LDR + 8051",        cat:"Embedded",  tag:"8051",            dept:"ECE/EEE"},
  {id:210,name:"RF Based Wireless Control System",           cat:"Embedded",  tag:"ARM / RF",        dept:"ECE/EEE"},
  {id:211,name:"Embedded Fire Alarm System – PIC",           cat:"Embedded",  tag:"PIC",             dept:"ECE/EEE"},
  {id:212,name:"GPS + GSM Vehicle Tracking – ARM",           cat:"Embedded",  tag:"ARM / GPS",       dept:"ECE/EEE"},
  {id:213,name:"BLDC Motor Control – ARM + MATLAB",          cat:"Embedded",  tag:"ARM Cortex",      dept:"ECE/EEE"},
  {id:214,name:"Contactless IR Temperature Monitor",         cat:"Embedded",  tag:"Arduino",         dept:"ECE/EEE"},
  {id:215,name:"VLSI 4-bit ALU – VHDL",                      cat:"Embedded",  tag:"FPGA / VLSI",     dept:"ECE/EEE"},
  {id:216,name:"Smart Door Lock – Fingerprint + ARM",        cat:"Embedded",  tag:"ARM Cortex",      dept:"ECE/EEE"},
  {id:217,name:"Wireless ECG Monitor – Arduino + BT",        cat:"Embedded",  tag:"Arduino",         dept:"ECE/EEE"},
  {id:218,name:"Drone Flight Controller – PID + Embedded",   cat:"Embedded",  tag:"Robotics",        dept:"ECE/EEE"},
  {id:219,name:"Zigbee Mesh Network System",                 cat:"Embedded",  tag:"Wireless",        dept:"ECE/EEE"},
  {id:220,name:"Solar MPPT Charge Controller",               cat:"Embedded",  tag:"Power Elec",      dept:"ECE/EEE"},
  {id:221,name:"Automated Railway Gate – 8051",              cat:"Embedded",  tag:"8051",            dept:"ECE/EEE"},
  {id:222,name:"Ultrasonic Blind Navigation Stick",          cat:"Embedded",  tag:"Arduino",         dept:"ECE/EEE"},
  {id:223,name:"CAN Bus Automotive Communication",           cat:"Embedded",  tag:"ARM Cortex",      dept:"ECE/EEE"},
  {id:224,name:"Line Following Robot – Arduino",             cat:"Embedded",  tag:"Robotics",        dept:"ECE/EEE"},
  {id:225,name:"Obstacle Avoiding Robot – Arduino",          cat:"Embedded",  tag:"Robotics",        dept:"ECE/EEE"},
  {id:226,name:"Temperature Controlled Fan – PIC",           cat:"Embedded",  tag:"PIC",             dept:"ECE/EEE"},
  {id:227,name:"Anti-Theft Vibration Alert – 8051",          cat:"Embedded",  tag:"8051",            dept:"ECE/EEE"},
  {id:228,name:"Intelligent Braking System – ARM",           cat:"Embedded",  tag:"ARM Cortex",      dept:"ECE/EEE"},
  {id:229,name:"FPGA Image Processing System",               cat:"Embedded",  tag:"FPGA / VLSI",     dept:"ECE/EEE"},
  {id:230,name:"Smart Meter with LCD – PIC",                 cat:"Embedded",  tag:"PIC",             dept:"ECE/EEE"},
  // Embedded (New 231-260)
  {id:231,name:"Automatic Plant Watering System – Arduino",  cat:"Embedded",  tag:"Arduino",         dept:"ECE/EEE"},
  {id:232,name:"GSM Based Home Security System",             cat:"Embedded",  tag:"ARM / GSM",       dept:"ECE/EEE"},
  {id:233,name:"RFID Based Attendance System",               cat:"Embedded",  tag:"RFID / Arduino",  dept:"ECE/EEE"},
  {id:234,name:"Biometric Fingerprint Lock",                 cat:"Embedded",  tag:"ARM Cortex",      dept:"ECE/EEE"},
  {id:235,name:"Solar Tracking System – LDR + 8051",         cat:"Embedded",  tag:"8051",            dept:"ECE/EEE"},
  {id:236,name:"Bluetooth Controlled Robot",                 cat:"Embedded",  tag:"Arduino",         dept:"ECE/EEE"},
  {id:237,name:"Digital Thermometer – LM35 + PIC",           cat:"Embedded",  tag:"PIC",             dept:"ECE/EEE"},
  {id:238,name:"IR Remote Controlled Switch",                cat:"Embedded",  tag:"8051",            dept:"ECE/EEE"},
  {id:239,name:"Smart Energy Saving System – PIR",           cat:"Embedded",  tag:"Arduino",         dept:"ECE/EEE"},
  {id:240,name:"Vehicle Over Speed Detector – IR",           cat:"Embedded",  tag:"ARM Cortex",      dept:"ECE/EEE"},
  {id:241,name:"Ultrasonic Distance Measurement – LCD",      cat:"Embedded",  tag:"Arduino",         dept:"ECE/EEE"},
  {id:242,name:"PWM Motor Speed Controller – 8051",          cat:"Embedded",  tag:"8051",            dept:"ECE/EEE"},
  {id:243,name:"Gas Leakage Detector – MQ6 + PIC",           cat:"Embedded",  tag:"PIC",             dept:"ECE/EEE"},
  {id:244,name:"Touch Screen Based Home Automation",         cat:"Embedded",  tag:"ARM Cortex",      dept:"ECE/EEE"},
  {id:245,name:"Raspberry Pi Weather Station",               cat:"Embedded",  tag:"Raspberry Pi",    dept:"ECE/EEE"},
  {id:246,name:"Automatic Railway Crossing – IR Sensor",     cat:"Embedded",  tag:"Arduino",         dept:"ECE/EEE"},
  {id:247,name:"FPGA Based Frequency Counter",               cat:"Embedded",  tag:"FPGA / VLSI",     dept:"ECE/EEE"},
  {id:248,name:"Smart Water Heater – Temperature Control",   cat:"Embedded",  tag:"8051",            dept:"ECE/EEE"},
  {id:249,name:"Gesture Controlled Robot – Arduino",         cat:"Embedded",  tag:"Robotics",        dept:"ECE/EEE"},
  {id:250,name:"Password Based Circuit Breaker",             cat:"Embedded",  tag:"ARM Cortex",      dept:"ECE/EEE"},
  {id:251,name:"VLSI Digital Clock – VHDL",                  cat:"Embedded",  tag:"FPGA / VLSI",     dept:"ECE/EEE"},
  {id:252,name:"PIC Microcontroller Based Calculator",       cat:"Embedded",  tag:"PIC",             dept:"ECE/EEE"},
  {id:253,name:"Arduino Based LPG Detector",                 cat:"Embedded",  tag:"Arduino",         dept:"ECE/EEE"},
  {id:254,name:"ARM Based Temperature Logger",               cat:"Embedded",  tag:"ARM Cortex",      dept:"ECE/EEE"},
  {id:255,name:"Raspberry Pi CCTV System",                   cat:"Embedded",  tag:"Raspberry Pi",    dept:"ECE/EEE"},
  {id:256,name:"Ultrasonic Parking Assistant – 8051",        cat:"Embedded",  tag:"8051",            dept:"ECE/EEE"},
  {id:257,name:"FPGA Traffic Light Controller",              cat:"Embedded",  tag:"FPGA / VLSI",     dept:"ECE/EEE"},
  {id:258,name:"PIC Based Digital Voltmeter",                cat:"Embedded",  tag:"PIC",             dept:"ECE/EEE"},
  {id:259,name:"Arduino Based Heartbeat Monitor",            cat:"Embedded",  tag:"Arduino",         dept:"ECE/EEE"},
  {id:260,name:"ARM Based Stepper Motor Control",            cat:"Embedded",  tag:"ARM Cortex",      dept:"ECE/EEE"},

  // Mechanical (Original 301-320)
  {id:301,name:"Hydraulic Lift System – Working Model",      cat:"Mechanical",tag:"Fabrication",     dept:"Mech/Auto"},
  {id:302,name:"Pneumatic Pick and Place Robot",             cat:"Mechanical",tag:"Robotics",        dept:"Mech/Auto"},
  {id:303,name:"Solar Powered Electric Vehicle",             cat:"Mechanical",tag:"Automobile",      dept:"Mech/Auto"},
  {id:304,name:"Mini CNC Machine – Arduino Control",         cat:"Mechanical",tag:"CAD / CNC",       dept:"Mech/Auto"},
  {id:305,name:"Robotic Arm with Gripper – Servo",           cat:"Mechanical",tag:"Robotics",        dept:"Mech/Auto"},
  {id:306,name:"Conveyor Belt Automation",                   cat:"Mechanical",tag:"Automation",      dept:"Mech/Auto"},
  {id:307,name:"Electromagnetic Braking System",             cat:"Mechanical",tag:"Automobile",      dept:"Mech/Auto"},
  {id:308,name:"Gear Box Design & Analysis – ANSYS",         cat:"Mechanical",tag:"CAD / ANSYS",     dept:"Mech/Auto"},
  {id:309,name:"Wind Turbine Power Generation Mini",         cat:"Mechanical",tag:"Renewable",       dept:"Mech/Auto"},
  {id:310,name:"Agricultural Spraying Robot",                cat:"Mechanical",tag:"Agriculture",     dept:"Mech/Auto"},
  {id:311,name:"Automatic Car Washing System",               cat:"Mechanical",tag:"Automation",      dept:"Mech/Auto"},
  {id:312,name:"Automatic Pneumatic Bumper System",          cat:"Mechanical",tag:"Automobile",      dept:"Mech/Auto"},
  {id:313,name:"SolidWorks Stress Analysis",                 cat:"Mechanical",tag:"CAD / ANSYS",     dept:"Mech/Auto"},
  {id:314,name:"Hydraulic Jack System",                      cat:"Mechanical",tag:"Fabrication",     dept:"Mech/Auto"},
  {id:315,name:"CATIA Turbine Blade Design",                 cat:"Mechanical",tag:"CAD / CATIA",     dept:"Mech/Auto"},
  {id:316,name:"Stirling Engine – Heat Energy",              cat:"Mechanical",tag:"Fabrication",     dept:"Mech/Auto"},
  {id:317,name:"Automatic Gear Shifting Mechanism",          cat:"Mechanical",tag:"Automobile",      dept:"Mech/Auto"},
  {id:318,name:"3D Printed Prosthetic Hand",                 cat:"Mechanical",tag:"Biomedical",      dept:"Mech/Auto"},
  {id:319,name:"Magnetic Levitation System",                 cat:"Mechanical",tag:"Advanced",        dept:"Mech/Auto"},
  {id:320,name:"Water Jet Machining Setup",                  cat:"Mechanical",tag:"Fabrication",     dept:"Mech/Auto"},
  // Mechanical (New 321-350)
  {id:321,name:"Automatic Pneumatic Bumper System",          cat:"Mechanical",tag:"Automobile",      dept:"Mech/Auto"},
  {id:322,name:"Four Wheel Steering Mechanism",              cat:"Mechanical",tag:"Automobile",      dept:"Mech/Auto"},
  {id:323,name:"Regenerative Braking System",                cat:"Mechanical",tag:"Automobile",      dept:"Mech/Auto"},
  {id:324,name:"Electric Bicycle with Solar Charging",       cat:"Mechanical",tag:"Renewable",       dept:"Mech/Auto"},
  {id:325,name:"CNC Plotter Machine – Arduino",              cat:"Mechanical",tag:"CAD / CNC",       dept:"Mech/Auto"},
  {id:326,name:"Scissor Lift Mechanism – Fabrication",       cat:"Mechanical",tag:"Fabrication",     dept:"Mech/Auto"},
  {id:327,name:"Pipe Crawling Robot – Inspection",           cat:"Mechanical",tag:"Robotics",        dept:"Mech/Auto"},
  {id:328,name:"Solar Water Heater – Working Model",         cat:"Mechanical",tag:"Renewable",       dept:"Mech/Auto"},
  {id:329,name:"Pedal Operated Water Pump",                  cat:"Mechanical",tag:"Fabrication",     dept:"Mech/Auto"},
  {id:330,name:"Automatic Pneumatic Jack",                   cat:"Mechanical",tag:"Automobile",      dept:"Mech/Auto"},
  {id:331,name:"Wall Climbing Robot",                        cat:"Mechanical",tag:"Robotics",        dept:"Mech/Auto"},
  {id:332,name:"Thermal Analysis of IC Engine – ANSYS",      cat:"Mechanical",tag:"CAD / ANSYS",     dept:"Mech/Auto"},
  {id:333,name:"Remote Controlled Lawn Mower",               cat:"Mechanical",tag:"Agriculture",     dept:"Mech/Auto"},
  {id:334,name:"Air Powered Engine",                         cat:"Mechanical",tag:"Fabrication",     dept:"Mech/Auto"},
  {id:335,name:"Chainless Bicycle – Shaft Drive",            cat:"Mechanical",tag:"Automobile",      dept:"Mech/Auto"},
  {id:336,name:"Fingerprint Based Ignition System",          cat:"Mechanical",tag:"Automobile",      dept:"Mech/Auto"},
  {id:337,name:"Solar Grass Cutter",                         cat:"Mechanical",tag:"Agriculture",     dept:"Mech/Auto"},
  {id:338,name:"Automatic Bottle Filling System",            cat:"Mechanical",tag:"Automation",      dept:"Mech/Auto"},
  {id:339,name:"CATIA Crankshaft Design",                    cat:"Mechanical",tag:"CAD / CATIA",     dept:"Mech/Auto"},
  {id:340,name:"Pneumatic Sheet Metal Cutting",              cat:"Mechanical",tag:"Fabrication",     dept:"Mech/Auto"},
  {id:341,name:"Smart Solar Tracking System",                cat:"Mechanical",tag:"Renewable",       dept:"Mech/Auto"},
  {id:342,name:"Automated Guided Vehicle (AGV)",             cat:"Mechanical",tag:"Robotics",        dept:"Mech/Auto"},
  {id:343,name:"SolidWorks Crankshaft Analysis",             cat:"Mechanical",tag:"CAD / ANSYS",     dept:"Mech/Auto"},
  {id:344,name:"Pedal Operated Washing Machine",             cat:"Mechanical",tag:"Fabrication",     dept:"Mech/Auto"},
  {id:345,name:"Forklift Mechanism – Mini Model",            cat:"Mechanical",tag:"Automation",      dept:"Mech/Auto"},
  {id:346,name:"Mechanical Bird Flapping Mechanism",         cat:"Mechanical",tag:"Robotics",        dept:"Mech/Auto"},
  {id:347,name:"Drum Brake System – Working Model",          cat:"Mechanical",tag:"Automobile",      dept:"Mech/Auto"},
  {id:348,name:"Heat Pipe Heat Exchanger",                   cat:"Mechanical",tag:"Thermal",         dept:"Mech/Auto"},
  {id:349,name:"Remote Controlled Bomb Disposal Robot",      cat:"Mechanical",tag:"Robotics",        dept:"Mech/Auto"},
  {id:350,name:"Spring Loaded Braking System",               cat:"Mechanical",tag:"Automobile",      dept:"Mech/Auto"},

  // Web Dev (Original 401-425)
  {id:401,name:"E-Commerce Platform – MERN + Razorpay",     cat:"Web Dev",   tag:"MERN Stack",      dept:"CSE/MCA"},
  {id:402,name:"Hospital Management – Spring Boot",          cat:"Web Dev",   tag:"Java / Spring",   dept:"CSE/MCA"},
  {id:403,name:"Job Portal – Next.js + Node.js",             cat:"Web Dev",   tag:"React / Node",    dept:"CSE/MCA"},
  {id:404,name:"Online Learning Platform – React + Django",  cat:"Web Dev",   tag:"Full Stack",      dept:"CSE/MCA"},
  {id:405,name:"Real Estate Portal – MERN + Maps",           cat:"Web Dev",   tag:"MERN Stack",      dept:"CSE/MCA"},
  {id:406,name:"Social Media App – React + Socket.io",       cat:"Web Dev",   tag:"MERN Stack",      dept:"CSE/MCA"},
  {id:407,name:"Food Delivery Platform – MERN + Pay",        cat:"Web Dev",   tag:"MERN Stack",      dept:"CSE/MCA"},
  {id:408,name:"Telemedicine Consultation Portal",           cat:"Web Dev",   tag:"React / Node",    dept:"CSE/MCA"},
  {id:409,name:"Library Management – Django + MySQL",        cat:"Web Dev",   tag:"Python / Django", dept:"CSE/MCA"},
  {id:410,name:"Online Examination – PHP + Laravel",         cat:"Web Dev",   tag:"PHP / Laravel",   dept:"CSE/MCA"},
  {id:411,name:"School ERP System – React + Node",           cat:"Web Dev",   tag:"Full Stack",      dept:"CSE/MCA"},
  {id:412,name:"Blood Bank Management – MERN",               cat:"Web Dev",   tag:"MERN Stack",      dept:"CSE/MCA"},
  {id:413,name:"Inventory Management – Java Spring Boot",    cat:"Web Dev",   tag:"Java / Spring",   dept:"CSE/MCA"},
  {id:414,name:"Online Voting – Blockchain + React",         cat:"Web Dev",   tag:"Blockchain",      dept:"CSE/MCA"},
  {id:415,name:"CRM Application – MERN Stack",               cat:"Web Dev",   tag:"MERN Stack",      dept:"CSE/MCA"},
  {id:416,name:"Hotel Booking – PHP + MySQL",                cat:"Web Dev",   tag:"PHP / MySQL",     dept:"CSE/MCA"},
  {id:417,name:"Virtual Classroom – React + WebRTC",         cat:"Web Dev",   tag:"Full Stack",      dept:"CSE/MCA"},
  {id:418,name:"Travel Booking – MERN Stack",                cat:"Web Dev",   tag:"MERN Stack",      dept:"CSE/MCA"},
  {id:419,name:"HR Management – Spring Boot",                cat:"Web Dev",   tag:"Java / Spring",   dept:"CSE/MCA"},
  {id:420,name:"Supply Chain Management – MERN",             cat:"Web Dev",   tag:"MERN Stack",      dept:"CSE/MCA"},
  {id:421,name:"Crowdfunding Platform – React + Node",       cat:"Web Dev",   tag:"Full Stack",      dept:"CSE/MCA"},
  {id:422,name:"Online Auction – Django + React",            cat:"Web Dev",   tag:"Python / Django", dept:"CSE/MCA"},
  {id:423,name:"Vehicle Rental Platform – MERN",             cat:"Web Dev",   tag:"MERN Stack",      dept:"CSE/MCA"},
  {id:424,name:"Gym Management – PHP + MySQL",               cat:"Web Dev",   tag:"PHP / MySQL",     dept:"CSE/MCA"},
  {id:425,name:"AI News Aggregator – MERN + NLP",            cat:"Web Dev",   tag:"Full Stack",      dept:"CSE/MCA"},
  // Web Dev (New 426-460)
  {id:426,name:"Portfolio Builder – React + Tailwind",       cat:"Web Dev",   tag:"React / Node",    dept:"CSE/MCA"},
  {id:427,name:"Task Management Tool – MERN",                cat:"Web Dev",   tag:"MERN Stack",      dept:"CSE/MCA"},
  {id:428,name:"Chat Application – Socket.io + React",       cat:"Web Dev",   tag:"Full Stack",      dept:"CSE/MCA"},
  {id:429,name:"Expense Tracker – MERN",                     cat:"Web Dev",   tag:"MERN Stack",      dept:"CSE/MCA"},
  {id:430,name:"Movie Ticket Booking – React + Node",        cat:"Web Dev",   tag:"React / Node",    dept:"CSE/MCA"},
  {id:431,name:"Online Food Ordering – Django",              cat:"Web Dev",   tag:"Python / Django", dept:"CSE/MCA"},
  {id:432,name:"Fitness Tracker Web App – MERN",             cat:"Web Dev",   tag:"MERN Stack",      dept:"CSE/MCA"},
  {id:433,name:"Doctor Appointment System – Spring Boot",    cat:"Web Dev",   tag:"Java / Spring",   dept:"CSE/MCA"},
  {id:434,name:"Survey Form Builder – MERN",                 cat:"Web Dev",   tag:"MERN Stack",      dept:"CSE/MCA"},
  {id:435,name:"Notes App – React + Firebase",               cat:"Web Dev",   tag:"React / Node",    dept:"CSE/MCA"},
  {id:436,name:"URL Shortener – Node.js + MongoDB",          cat:"Web Dev",   tag:"Full Stack",      dept:"CSE/MCA"},
  {id:437,name:"Weather App – React + OpenWeather",          cat:"Web Dev",   tag:"React / Node",    dept:"CSE/MCA"},
  {id:438,name:"Online Quiz System – PHP + MySQL",           cat:"Web Dev",   tag:"PHP / MySQL",     dept:"CSE/MCA"},
  {id:439,name:"Music Streaming – MERN",                     cat:"Web Dev",   tag:"MERN Stack",      dept:"CSE/MCA"},
  {id:440,name:"Leave Management System – Spring Boot",      cat:"Web Dev",   tag:"Java / Spring",   dept:"CSE/MCA"},
  {id:441,name:"Blog Platform – Django",                     cat:"Web Dev",   tag:"Python / Django", dept:"CSE/MCA"},
  {id:442,name:"E-Wallet System – MERN",                     cat:"Web Dev",   tag:"MERN Stack",      dept:"CSE/MCA"},
  {id:443,name:"Ride Hailing Platform – React + Node",       cat:"Web Dev",   tag:"Full Stack",      dept:"CSE/MCA"},
  {id:444,name:"Hotel Management – Django",                  cat:"Web Dev",   tag:"Python / Django", dept:"CSE/MCA"},
  {id:445,name:"Donation Platform – MERN",                   cat:"Web Dev",   tag:"MERN Stack",      dept:"CSE/MCA"},
  {id:446,name:"Bug Tracking System – Spring Boot",          cat:"Web Dev",   tag:"Java / Spring",   dept:"CSE/MCA"},
  {id:447,name:"Recipe Finder – React + API",                cat:"Web Dev",   tag:"React / Node",    dept:"CSE/MCA"},
  {id:448,name:"Payment Gateway Integration – MERN",         cat:"Web Dev",   tag:"MERN Stack",      dept:"CSE/MCA"},
  {id:449,name:"Employee Leave Tracker – PHP",               cat:"Web Dev",   tag:"PHP / MySQL",     dept:"CSE/MCA"},
  {id:450,name:"Social Network API – Node.js",               cat:"Web Dev",   tag:"Full Stack",      dept:"CSE/MCA"},
  {id:451,name:"Dashboard Analytics – React + Chart.js",     cat:"Web Dev",   tag:"React / Node",    dept:"CSE/MCA"},
  {id:452,name:"Courier Management – MERN",                  cat:"Web Dev",   tag:"MERN Stack",      dept:"CSE/MCA"},
  {id:453,name:"Online Matrimony – PHP + MySQL",             cat:"Web Dev",   tag:"PHP / MySQL",     dept:"CSE/MCA"},
  {id:454,name:"Project Management Tool – MERN",             cat:"Web Dev",   tag:"MERN Stack",      dept:"CSE/MCA"},
  {id:455,name:"Video Conferencing – WebRTC + React",        cat:"Web Dev",   tag:"Full Stack",      dept:"CSE/MCA"},
  {id:456,name:"Garage Management System – Spring Boot",     cat:"Web Dev",   tag:"Java / Spring",   dept:"CSE/MCA"},
  {id:457,name:"News Portal – Django",                       cat:"Web Dev",   tag:"Python / Django", dept:"CSE/MCA"},
  {id:458,name:"Subscription Tracker – MERN",                cat:"Web Dev",   tag:"MERN Stack",      dept:"CSE/MCA"},
  {id:459,name:"Customer Support Ticketing – React + Node",  cat:"Web Dev",   tag:"Full Stack",      dept:"CSE/MCA"},
  {id:460,name:"Attendance Tracker – Spring Boot",           cat:"Web Dev",   tag:"Java / Spring",   dept:"CSE/MCA"},

  // Mobile App (Original 501-520)
  {id:501,name:"Food Delivery App – Flutter + Firebase",     cat:"Mobile App",tag:"Flutter",         dept:"CSE/MCA"},
  {id:502,name:"Telemedicine App – React Native",            cat:"Mobile App",tag:"React Native",    dept:"CSE/MCA"},
  {id:503,name:"Ride Sharing – Flutter + Google Maps",       cat:"Mobile App",tag:"Flutter",         dept:"CSE/MCA"},
  {id:504,name:"Smart Campus App – Android + QR",            cat:"Mobile App",tag:"Android",         dept:"CSE/MCA"},
  {id:505,name:"Health Tracker – Flutter + Wear OS",         cat:"Mobile App",tag:"Flutter",         dept:"CSE/MCA"},
  {id:506,name:"AR Try-On App – Android + ARCore",           cat:"Mobile App",tag:"AR / Android",    dept:"CSE/MCA"},
  {id:507,name:"IoT Controller App – Flutter + MQTT",        cat:"Mobile App",tag:"Flutter / IoT",   dept:"CSE/MCA"},
  {id:508,name:"E-Learning App – Flutter + Firebase",        cat:"Mobile App",tag:"Flutter",         dept:"CSE/MCA"},
  {id:509,name:"Grocery Delivery App – Android",             cat:"Mobile App",tag:"Android",         dept:"CSE/MCA"},
  {id:510,name:"Bus Tracking – Flutter + GPS",               cat:"Mobile App",tag:"Flutter",         dept:"CSE/MCA"},
  {id:511,name:"Banking App – React Native + Node",          cat:"Mobile App",tag:"React Native",    dept:"CSE/MCA"},
  {id:512,name:"Fitness Tracker – Flutter + ML",             cat:"Mobile App",tag:"Flutter",         dept:"CSE/MCA"},
  {id:513,name:"Smart Attendance – Android + Face AI",       cat:"Mobile App",tag:"Android / AI",    dept:"CSE/MCA"},
  {id:514,name:"Event Management App – Flutter",             cat:"Mobile App",tag:"Flutter",         dept:"CSE/MCA"},
  {id:515,name:"Home Service App – React Native",            cat:"Mobile App",tag:"React Native",    dept:"CSE/MCA"},
  {id:516,name:"Hotel Booking App – Flutter + Firebase",     cat:"Mobile App",tag:"Flutter",         dept:"CSE/MCA"},
  {id:517,name:"Job Search App – Android + Node",            cat:"Mobile App",tag:"Android",         dept:"CSE/MCA"},
  {id:518,name:"Pharmacy App – Flutter + Firebase",          cat:"Mobile App",tag:"Flutter",         dept:"CSE/MCA"},
  {id:519,name:"Parking Finder – Flutter + Maps",            cat:"Mobile App",tag:"Flutter",         dept:"CSE/MCA"},
  {id:520,name:"Mental Health App – Flutter",                cat:"Mobile App",tag:"Flutter",         dept:"CSE/MCA"},
  // Mobile App (New 521-550)
  {id:521,name:"Expense Manager – Flutter",                  cat:"Mobile App",tag:"Flutter",         dept:"CSE/MCA"},
  {id:522,name:"News App – React Native + API",              cat:"Mobile App",tag:"React Native",    dept:"CSE/MCA"},
  {id:523,name:"QR Scanner App – Android",                   cat:"Mobile App",tag:"Android",         dept:"CSE/MCA"},
  {id:524,name:"Fitness Coach App – Flutter",                cat:"Mobile App",tag:"Flutter",         dept:"CSE/MCA"},
  {id:525,name:"Movie Ticket App – React Native",            cat:"Mobile App",tag:"React Native",    dept:"CSE/MCA"},
  {id:526,name:"Blood Donation App – Flutter",               cat:"Mobile App",tag:"Flutter",         dept:"CSE/MCA"},
  {id:527,name:"Voice Assistant App – Android",              cat:"Mobile App",tag:"Android / AI",    dept:"CSE/MCA"},
  {id:528,name:"Daily Journal App – Flutter",                cat:"Mobile App",tag:"Flutter",         dept:"CSE/MCA"},
  {id:529,name:"Restaurant Finder – React Native",           cat:"Mobile App",tag:"React Native",    dept:"CSE/MCA"},
  {id:530,name:"ToDo List App – Flutter",                    cat:"Mobile App",tag:"Flutter",         dept:"CSE/MCA"},
  {id:531,name:"Music Player App – Android",                 cat:"Mobile App",tag:"Android",         dept:"CSE/MCA"},
  {id:532,name:"Weather App – Flutter + API",                cat:"Mobile App",tag:"Flutter",         dept:"CSE/MCA"},
  {id:533,name:"Chat App – React Native + Socket.io",        cat:"Mobile App",tag:"React Native",    dept:"CSE/MCA"},
  {id:534,name:"QR Code Generator – Flutter",                cat:"Mobile App",tag:"Flutter",         dept:"CSE/MCA"},
  {id:535,name:"Reminder App – Android",                     cat:"Mobile App",tag:"Android",         dept:"CSE/MCA"},
  {id:536,name:"Language Learning App – Flutter",            cat:"Mobile App",tag:"Flutter",         dept:"CSE/MCA"},
  {id:537,name:"Fitness Workout Planner – React Native",     cat:"Mobile App",tag:"React Native",    dept:"CSE/MCA"},
  {id:538,name:"Notes App – Flutter + Firebase",             cat:"Mobile App",tag:"Flutter",         dept:"CSE/MCA"},
  {id:539,name:"Video Player App – Android",                 cat:"Mobile App",tag:"Android",         dept:"CSE/MCA"},
  {id:540,name:"Meditation App – Flutter",                   cat:"Mobile App",tag:"Flutter",         dept:"CSE/MCA"},
  {id:541,name:"Currency Converter – React Native",          cat:"Mobile App",tag:"React Native",    dept:"CSE/MCA"},
  {id:542,name:"Flashcard App – Flutter",                    cat:"Mobile App",tag:"Flutter",         dept:"CSE/MCA"},
  {id:543,name:"Book Reader App – Android",                  cat:"Mobile App",tag:"Android",         dept:"CSE/MCA"},
  {id:544,name:"Sleep Tracker – Flutter",                    cat:"Mobile App",tag:"Flutter",         dept:"CSE/MCA"},
  {id:545,name:"Dictionary App – React Native",              cat:"Mobile App",tag:"React Native",    dept:"CSE/MCA"},
  {id:546,name:"BMI Calculator – Flutter",                   cat:"Mobile App",tag:"Flutter",         dept:"CSE/MCA"},
  {id:547,name:"Quote Generator – Android",                  cat:"Mobile App",tag:"Android",         dept:"CSE/MCA"},
  {id:548,name:"Habit Tracker – Flutter",                    cat:"Mobile App",tag:"Flutter",         dept:"CSE/MCA"},
  {id:549,name:"Flashlight App – Android",                   cat:"Mobile App",tag:"Android",         dept:"CSE/MCA"},
  {id:550,name:"Stopwatch App – Flutter",                    cat:"Mobile App",tag:"Flutter",         dept:"CSE/MCA"},

  // Blockchain (Original 601-615)
  {id:601,name:"Blockchain Certificate Verification",        cat:"Blockchain",tag:"Solidity / Web3", dept:"CSE/IT"},
  {id:602,name:"NFT Marketplace – Ethereum + React",         cat:"Blockchain",tag:"Ethereum",        dept:"CSE/IT"},
  {id:603,name:"Decentralized Voting – Solidity",            cat:"Blockchain",tag:"Solidity",        dept:"CSE/IT"},
  {id:604,name:"Supply Chain – Hyperledger",                 cat:"Blockchain",tag:"Hyperledger",     dept:"CSE/IT"},
  {id:605,name:"Crypto Payment Gateway – Web3",              cat:"Blockchain",tag:"Web3.js",         dept:"CSE/IT"},
  {id:606,name:"DeFi Lending Platform – Solidity",           cat:"Blockchain",tag:"Solidity",        dept:"CSE/IT"},
  {id:607,name:"Blockchain Medical Records",                 cat:"Blockchain",tag:"Ethereum",        dept:"CSE/IT"},
  {id:608,name:"Smart Contract Audit Tool",                  cat:"Blockchain",tag:"Solidity",        dept:"CSE/IT"},
  {id:609,name:"DAO Management Platform",                    cat:"Blockchain",tag:"Web3.js",         dept:"CSE/IT"},
  {id:610,name:"Blockchain Academic Records – IPFS",         cat:"Blockchain",tag:"IPFS / Ethereum", dept:"CSE/IT"},
  {id:611,name:"Decentralized File Storage – IPFS",          cat:"Blockchain",tag:"IPFS",            dept:"CSE/IT"},
  {id:612,name:"Blockchain Real Estate Platform",            cat:"Blockchain",tag:"Solidity",        dept:"CSE/IT"},
  {id:613,name:"Token Creation Platform – ERC20",            cat:"Blockchain",tag:"Ethereum",        dept:"CSE/IT"},
  {id:614,name:"Blockchain KYC Verification",                cat:"Blockchain",tag:"Solidity",        dept:"CSE/IT"},
  {id:615,name:"Crypto Portfolio Tracker",                   cat:"Blockchain",tag:"Web3.js",         dept:"CSE/IT"},
  // Blockchain (New 616-640)
  {id:616,name:"Blockchain Based Lottery System",            cat:"Blockchain",tag:"Solidity",        dept:"CSE/IT"},
  {id:617,name:"Decentralized Crowdfunding Platform",        cat:"Blockchain",tag:"Ethereum",        dept:"CSE/IT"},
  {id:618,name:"Blockchain Digital Identity",                cat:"Blockchain",tag:"Hyperledger",     dept:"CSE/IT"},
  {id:619,name:"Cryptocurrency Exchange Simulator",          cat:"Blockchain",tag:"Web3.js",         dept:"CSE/IT"},
  {id:620,name:"Blockchain Land Registry",                   cat:"Blockchain",tag:"Solidity",        dept:"CSE/IT"},
  {id:621,name:"NFT Auction Platform",                       cat:"Blockchain",tag:"Ethereum",        dept:"CSE/IT"},
  {id:622,name:"Blockchain Supply Chain Tracking",           cat:"Blockchain",tag:"Hyperledger",     dept:"CSE/IT"},
  {id:623,name:"Decentralized Chat App",                     cat:"Blockchain",tag:"Web3.js",         dept:"CSE/IT"},
  {id:624,name:"Blockchain Insurance Claim System",          cat:"Blockchain",tag:"Solidity",        dept:"CSE/IT"},
  {id:625,name:"Tokenized Reward System",                    cat:"Blockchain",tag:"Ethereum",        dept:"CSE/IT"},
  {id:626,name:"Blockchain Document Timestamping",           cat:"Blockchain",tag:"Solidity",        dept:"CSE/IT"},
  {id:627,name:"Decentralized Marketplace",                  cat:"Blockchain",tag:"Web3.js",         dept:"CSE/IT"},
  {id:628,name:"Blockchain Fundraising Platform",            cat:"Blockchain",tag:"Hyperledger",     dept:"CSE/IT"},
  {id:629,name:"Cryptocurrency Wallet App",                  cat:"Blockchain",tag:"Web3.js",         dept:"CSE/IT"},
  {id:630,name:"Blockchain Copyright Protection",            cat:"Blockchain",tag:"Solidity",        dept:"CSE/IT"},

  // CSE / Cybersecurity (Original 701-715)
  {id:701,name:"AI-Based Resume Screening System",           cat:"CSE / IT",  tag:"AI / Python",     dept:"CSE/IT"},
  {id:702,name:"Zero-Day Attack Detection – ML",             cat:"CSE / IT",  tag:"Cybersecurity",   dept:"CSE/IT"},
  {id:703,name:"Cloud-Based Hospital System – AWS",          cat:"CSE / IT",  tag:"Cloud / AWS",     dept:"CSE/IT"},
  {id:704,name:"Federated Learning – Privacy ML",            cat:"CSE / IT",  tag:"Deep Learning",   dept:"CSE/IT"},
  {id:705,name:"Plagiarism Detection – NLP Python",          cat:"CSE / IT",  tag:"NLP",             dept:"CSE/IT"},
  {id:706,name:"AR Campus Navigation – Android Unity",       cat:"CSE / IT",  tag:"AR / Android",    dept:"CSE/IT"},
  {id:707,name:"Biometric Authentication – ML",              cat:"CSE / IT",  tag:"Security",        dept:"CSE/IT"},
  {id:708,name:"Cloud File Storage – AWS S3",                cat:"CSE / IT",  tag:"Cloud / AWS",     dept:"CSE/IT"},
  {id:709,name:"Steganography Data Hiding",                  cat:"CSE / IT",  tag:"Security",        dept:"CSE/IT"},
  {id:710,name:"Automated Code Review – ML",                 cat:"CSE / IT",  tag:"DevOps / AI",     dept:"CSE/IT"},
  {id:711,name:"Microservices Architecture – Spring Boot",   cat:"CSE / IT",  tag:"Cloud / DevOps",  dept:"CSE/IT"},
  {id:712,name:"Serverless API – AWS Lambda",                cat:"CSE / IT",  tag:"Cloud / AWS",     dept:"CSE/IT"},
  {id:713,name:"Real-Time Analytics – Apache Kafka",         cat:"CSE / IT",  tag:"Big Data",        dept:"CSE/IT"},
  {id:714,name:"Graph Neural Network – Social Network",      cat:"CSE / IT",  tag:"Deep Learning",   dept:"CSE/IT"},
  {id:715,name:"CI/CD Pipeline – Jenkins + Docker",          cat:"CSE / IT",  tag:"DevOps",          dept:"CSE/IT"},
  // CSE / IT (New 716-750)
  {id:716,name:"DDoS Attack Detection – ML",                 cat:"CSE / IT",  tag:"Cybersecurity",   dept:"CSE/IT"},
  {id:717,name:"Cloud Based E-Learning Platform",            cat:"CSE / IT",  tag:"Cloud / AWS",     dept:"CSE/IT"},
  {id:718,name:"Ransomware Detection – ML",                  cat:"CSE / IT",  tag:"Cybersecurity",   dept:"CSE/IT"},
  {id:719,name:"Serverless Chat Application – AWS",          cat:"CSE / IT",  tag:"Cloud / AWS",     dept:"CSE/IT"},
  {id:720,name:"Image Steganography – LSB",                  cat:"CSE / IT",  tag:"Security",        dept:"CSE/IT"},
  {id:721,name:"DevOps Pipeline – GitHub Actions",           cat:"CSE / IT",  tag:"DevOps",          dept:"CSE/IT"},
  {id:722,name:"Real-Time Fraud Detection – Kafka",          cat:"CSE / IT",  tag:"Big Data",        dept:"CSE/IT"},
  {id:723,name:"Facial Recognition Security System",         cat:"CSE / IT",  tag:"AI / Python",     dept:"CSE/IT"},
  {id:724,name:"Server Monitoring Dashboard – AWS",          cat:"CSE / IT",  tag:"Cloud / AWS",     dept:"CSE/IT"},
  {id:725,name:"Intrusion Detection System – ML",            cat:"CSE / IT",  tag:"Cybersecurity",   dept:"CSE/IT"},
  {id:726,name:"Data Pipeline – Apache Spark",               cat:"CSE / IT",  tag:"Big Data",        dept:"CSE/IT"},
  {id:727,name:"Docker Container Orchestration",             cat:"CSE / IT",  tag:"DevOps",          dept:"CSE/IT"},
  {id:728,name:"Cloud Based File Sharing – AWS",             cat:"CSE / IT",  tag:"Cloud / AWS",     dept:"CSE/IT"},
  {id:729,name:"Vulnerability Scanner – Python",             cat:"CSE / IT",  tag:"Cybersecurity",   dept:"CSE/IT"},
  {id:730,name:"Real-Time Log Analysis – ELK Stack",         cat:"CSE / IT",  tag:"Big Data",        dept:"CSE/IT"},
  {id:731,name:"Kubernetes Cluster Management",              cat:"CSE / IT",  tag:"DevOps",          dept:"CSE/IT"},
  {id:732,name:"Serverless Image Processing – AWS",          cat:"CSE / IT",  tag:"Cloud / AWS",     dept:"CSE/IT"},
  {id:733,name:"Network Traffic Analysis – ML",              cat:"CSE / IT",  tag:"Cybersecurity",   dept:"CSE/IT"},
  {id:734,name:"Data Warehouse – Amazon Redshift",           cat:"CSE / IT",  tag:"Big Data",        dept:"CSE/IT"},
  {id:735,name:"Terraform Infrastructure as Code",           cat:"CSE / IT",  tag:"DevOps",          dept:"CSE/IT"},
  {id:736,name:"AWS Lambda Serverless API",                  cat:"CSE / IT",  tag:"Cloud / AWS",     dept:"CSE/IT"},
  {id:737,name:"Firewall Security System – ML",              cat:"CSE / IT",  tag:"Cybersecurity",   dept:"CSE/IT"},
  {id:738,name:"Real-Time Recommendation – Kafka",           cat:"CSE / IT",  tag:"Big Data",        dept:"CSE/IT"},
  {id:739,name:"Ansible Automation",                         cat:"CSE / IT",  tag:"DevOps",          dept:"CSE/IT"},
  {id:740,name:"Cloud Based CRM – AWS",                      cat:"CSE / IT",  tag:"Cloud / AWS",     dept:"CSE/IT"},
  {id:741,name:"Email Spam Detection – ML",                  cat:"CSE / IT",  tag:"Cybersecurity",   dept:"CSE/IT"},
  {id:742,name:"Stream Processing – Apache Flink",           cat:"CSE / IT",  tag:"Big Data",        dept:"CSE/IT"},
  {id:743,name:"Prometheus & Grafana Monitoring",            cat:"CSE / IT",  tag:"DevOps",          dept:"CSE/IT"},
  {id:744,name:"Cloud Based Inventory System",               cat:"CSE / IT",  tag:"Cloud / AWS",     dept:"CSE/IT"},
  {id:745,name:"Password Strength Checker – ML",             cat:"CSE / IT",  tag:"Cybersecurity",   dept:"CSE/IT"},
  {id:746,name:"Data Lake – AWS S3 & Glue",                  cat:"CSE / IT",  tag:"Big Data",        dept:"CSE/IT"},
  {id:747,name:"Nagios Network Monitoring",                  cat:"CSE / IT",  tag:"DevOps",          dept:"CSE/IT"},
  {id:748,name:"Cloud Based Learning Platform",              cat:"CSE / IT",  tag:"Cloud / AWS",     dept:"CSE/IT"},
  {id:749,name:"URL Malware Detection – ML",                 cat:"CSE / IT",  tag:"Cybersecurity",   dept:"CSE/IT"},
  {id:750,name:"Real-Time Dashboard – Apache Kafka",         cat:"CSE / IT",  tag:"Big Data",        dept:"CSE/IT"},
];

const CATS = [
  {key:"All",        label:"All Domains",          icon:"📋", color:"#1A2A6C"},
  {key:"AI & ML",    label:"AI & Machine Learning", icon:"🤖", color:"#6a1b9a"},
  {key:"IoT",        label:"IoT Projects",          icon:"🌐", color:"#00695c"},
  {key:"Embedded",   label:"Embedded Systems",      icon:"🔲", color:"#1a237e"},
  {key:"Mechanical", label:"Mechanical",            icon:"⚙️", color:"#2e7d32"},
  {key:"Web Dev",    label:"Web Development",       icon:"💻", color:"#1565c0"},
  {key:"Mobile App", label:"Mobile Apps",           icon:"📱", color:"#00838f"},
  {key:"Blockchain", label:"Blockchain",            icon:"⛓️", color:"#37474f"},
  {key:"CSE / IT",   label:"CSE / Cybersecurity",   icon:"🛡️", color:"#BF360C"},
];

const DOMAINS = [
  {id:"aiml",      icon:"🤖", title:"AI & Machine Learning Projects",    sub:`BE CSE, IT, MCA – Python, TensorFlow, YOLO v8, BERT – ${YEAR}`, color:"#f3e5f5", accent:"#6a1b9a", link:"/services/software-projects", count:80},
  {id:"iot",       icon:"🌐", title:"IoT Final Year Projects",            sub:`BE ECE, EEE, CSE – Arduino, ESP32, Raspberry Pi, AWS IoT – ${YEAR}`, color:"#e0f7fa", accent:"#00695c", link:"/services/iot-projects", count:55},
  {id:"embedded",  icon:"🔲", title:"Embedded System Projects",           sub:`BE ECE, EEE, EIE – 8051, ARM, PIC, FPGA – ${YEAR}`, color:"#e8eaf6", accent:"#1a237e", link:"/services/embedded-projects", count:60},
  {id:"mechanical",icon:"⚙️", title:"Mechanical Final Year Projects",     sub:`BE Mechanical, ME, Diploma – Fabrication, CAD, Robotics – ${YEAR}`, color:"#e8f5e9", accent:"#2e7d32", link:"/services/mechanical-projects", count:50},
  {id:"webdev",    icon:"💻", title:"Web Development Projects",           sub:`BE CSE, IT, MCA, BSc – MERN, Django, Spring Boot – ${YEAR}`, color:"#e3f2fd", accent:"#1565c0", link:"/services/software-projects", count:60},
  {id:"mobile",    icon:"📱", title:"Mobile App Projects",                sub:`BE CSE, IT, MCA, BSc – Flutter, Android, React Native – ${YEAR}`, color:"#fff3e0", accent:"#e65100", link:"/services/software-projects", count:50},
];

const WHY = [
  {icon:"📋", t:"900+ IEEE Project Titles",     d:`Coimbatore's largest IEEE ${YEAR} project title collection — all domains covered.`},
  {icon:"🏗️", t:"Real Working Models",           d:"Not just code — fully assembled, demo-ready hardware and software projects."},
  {icon:"📜", t:"Free Internship Certificate",   d:"Every project includes a free internship certificate accepted by all colleges."},
  {icon:"📖", t:"Complete IEEE Documentation",   d:"IEEE format report, synopsis, abstract, PPT, UML diagrams — everything included."},
  {icon:"🎤", t:"Viva Preparation Coaching",     d:"50+ mock viva questions and answers specific to your project — free with every package."},
  {icon:"💸", t:"Most Affordable in Coimbatore", d:"Transparent pricing, zero hidden charges, EMI options available for all domains."},
];

// ═══════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════
export default function Projects() {
  const [activeCat, setActiveCat] = useState("All");
  const [search, setSearch]       = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const [showCount, setShowCount] = useState(50);
  const [openFaq, setOpenFaq]     = useState(null);
  const revealRefs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add("pj-in"); }),
      {threshold:0.06}
    );
    revealRefs.current.forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  const ref = el => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  const allTags = useMemo(() => {
    const base = activeCat==="All" ? ALL : ALL.filter(p=>p.cat===activeCat);
    return ["All", ...new Set(base.map(p=>p.tag))];
  }, [activeCat]);

  const filtered = useMemo(() => {
    let list = activeCat==="All" ? ALL : ALL.filter(p=>p.cat===activeCat);
    if (activeTag!=="All") list = list.filter(p=>p.tag===activeTag);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q) || p.dept.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q));
    }
    return list;
  }, [activeCat, activeTag, search]);

  const catColor = CATS.find(c=>c.key===activeCat)?.color || "#1A2A6C";

  return (
    <div className="pj-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(pageSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="pj-hero" aria-labelledby="pj-h1">
        <div className="pj-hero-bg">
          <div className="pj-grid-bg" />
          <div className="pj-orb pj-orb1" />
          <div className="pj-orb pj-orb2" />
        </div>
        <div className="pj-container">
          <nav className="pj-bc" aria-label="breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
            <ol>
              <li itemScope itemType="https://schema.org/ListItem"><a href="/" itemProp="item"><span itemProp="name">Home</span></a><meta itemProp="position" content="1"/></li>
              <span>›</span>
              <li itemScope itemType="https://schema.org/ListItem" aria-current="page"><span itemProp="name">Final Year Project Titles {YEAR}</span><meta itemProp="position" content="2"/></li>
            </ol>
          </nav>

          <div className="pj-hero-chip"><span className="pj-chip-dot"/>IEEE {YEAR} — {ALL.length}+ Project Titles</div>

          <h1 id="pj-h1" className="pj-h1">
            Best Final Year Project Titles<br/>
            <span className="pj-grad">in Coimbatore {YEAR}</span>
          </h1>
          <p className="pj-hero-sub">
            <strong>CODEX PROJECT</strong> — the best final year project center in Coimbatore — offers <strong>{ALL.length}+ IEEE {YEAR} certified project titles</strong> for BE, ME, MCA, BSc & Diploma students across all engineering branches. Real working models · IEEE documentation · Internship certificate · Viva preparation.
          </p>
          <p className="pj-hero-addr">📍 {ADDR}</p>

          <div className="pj-trust-row">
            {["IEEE 2026-27","Real Working Models","Free Internship Cert","Complete Documentation","Viva Preparation","Affordable Pricing"].map(t=>(
              <span key={t} className="pj-trust-pill">✔ {t}</span>
            ))}
          </div>

          <div className="pj-hero-btns">
            <a href={`tel:+91${PHONE}`} className="pj-btn pj-btn-gold">📞 Call: {PHONE} — Free Consultation</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="pj-btn pj-btn-wa">💬 WhatsApp Us</a>
          </div>

          <div className="pj-jump-row">
            {DOMAINS.map(d=>(
              <a key={d.id} href={`#${d.id}`} className="pj-jump" style={{"--jc":d.accent}}>
                {d.icon} {d.title.replace(" Final Year Projects","").replace(" Projects","")} <span className="pj-jump-cnt">{d.count}+</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────── */}
      <section className="pj-stats pj-reveal" ref={ref}>
        <div className="pj-container">
          <div className="pj-stats-grid">
            {[
              {n:`${ALL.length}+`, l:"Project Titles",    i:"📋"},
              {n:"500+",           l:"Projects Delivered", i:"🚀"},
              {n:"1000+",          l:"Students Helped",    i:"🎓"},
              {n:"4.9 ⭐",         l:"Google Rating",      i:"⭐"},
            ].map((s,i)=>(
              <div key={i} className="pj-stat">
                <span className="pj-stat-icon">{s.i}</span>
                <strong className="pj-stat-num">{s.n}</strong>
                <span className="pj-stat-lbl">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 900+ PROJECT CATALOG TABLE ────────────────────── */}
      <section className="pj-catalog pj-reveal" ref={ref} aria-labelledby="pj-catalog-h2">
        <div className="pj-container">
          <span className="pj-eyebrow">Complete Project Catalog</span>
          <h2 id="pj-catalog-h2" className="pj-sec-title">
            Browse {ALL.length}+ IEEE {YEAR} Final Year Project Titles — Coimbatore
          </h2>
          <p className="pj-catalog-intro">
            Coimbatore's largest project title collection. Filter by domain, search by keyword — every title available with IEEE {YEAR} documentation and internship certificate. Call <strong>{PHONE}</strong>.
          </p>

          {/* Category tabs */}
          <div className="pj-cat-tabs" role="tablist">
            {CATS.map(c=>(
              <button key={c.key} role="tab" aria-selected={activeCat===c.key}
                className={`pj-cat-tab ${activeCat===c.key?"pj-cat-active":""}`}
                style={{"--tc":c.color}}
                onClick={()=>{setActiveCat(c.key);setActiveTag("All");setShowCount(50);}}>
                {c.icon} {c.label}
                <span className="pj-cnt-badge">
                  {c.key==="All"?ALL.length:ALL.filter(p=>p.cat===c.key).length}
                </span>
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="pj-search-row">
            <div className="pj-search-wrap">
              <span className="pj-s-icon">🔍</span>
              <input type="search" className="pj-search"
                placeholder={`Search ${activeCat==="All"?"all":activeCat} project titles...`}
                value={search} onChange={e=>{setSearch(e.target.value);setShowCount(50);}}
                aria-label="Search project titles"/>
              {search&&<button className="pj-s-clear" onClick={()=>setSearch("")}>✕</button>}
            </div>
            <span className="pj-result-count">{filtered.length} titles found</span>
          </div>

          {/* Tag filter */}
          {allTags.length>2&&(
            <div className="pj-tag-row">
              {allTags.slice(0,22).map(t=>(
                <button key={t} className={`pj-tag-pill ${activeTag===t?"pj-tag-active":""}`}
                  style={{"--tc":catColor}}
                  onClick={()=>{setActiveTag(t);setShowCount(50);}}>
                  {t}
                </button>
              ))}
            </div>
          )}

          {/* Table */}
          <div className="pj-table-wrap">
            <table className="pj-table">
              <thead>
                <tr>
                  <th className="pj-th pj-th-n">#</th>
                  <th className="pj-th pj-th-name">Project Title</th>
                  <th className="pj-th pj-th-cat">Domain</th>
                  <th className="pj-th pj-th-tag">Technology</th>
                  <th className="pj-th pj-th-dept">Branch</th>
                  <th className="pj-th pj-th-act">Enquire</th>
                </tr>
              </thead>
              <tbody>
                {filtered.slice(0,showCount).map((p,i)=>(
                  <tr key={p.id} className="pj-tr" itemScope itemType="https://schema.org/CreativeWork">
                    <td className="pj-td pj-td-n">{i+1}</td>
                    <td className="pj-td pj-td-name" itemProp="name">{p.name}</td>
                    <td className="pj-td pj-td-cat"><span className="pj-cat-pill" data-cat={p.cat}>{p.cat}</span></td>
                    <td className="pj-td pj-td-tag"><span className="pj-tech-pill">{p.tag}</span></td>
                    <td className="pj-td pj-td-dept">{p.dept}</td>
                    <td className="pj-td pj-td-act">
                      <a href={`${WA}?text=Hi!%20I%20need%20the%20project%3A%20${encodeURIComponent(p.name)}`}
                         target="_blank" rel="noopener noreferrer" className="pj-wa-btn">
                        WhatsApp →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filtered.length===0&&(
              <div className="pj-empty">No projects found for "<strong>{search}</strong>" — <a href={`tel:+91${PHONE}`}>call us</a> for custom titles.</div>
            )}
            {filtered.length>showCount&&(
              <div className="pj-load-wrap">
                <button className="pj-load-btn" onClick={()=>setShowCount(c=>c+50)}>
                  Load More ({filtered.length-showCount} remaining) ↓
                </button>
              </div>
            )}
          </div>
          <p className="pj-catalog-note">📞 Can't find your project? Call <strong>{PHONE}</strong> — we implement any custom title within your budget. 500+ more titles available!</p>
        </div>
      </section>

      {/* ── DOMAIN SECTIONS ──────────────────────────────── */}
      <section className="pj-domains-section pj-reveal" ref={ref}>
        <div className="pj-container">
          <span className="pj-eyebrow">By Department</span>
          <h2 className="pj-sec-title">Final Year Projects by Domain — Coimbatore {YEAR}</h2>
          <div className="pj-domains-grid">
            {DOMAINS.map((d,i)=>(
              <div key={d.id} id={d.id} className="pj-domain-card"
                style={{"--da":d.accent,"--db":d.color,"--di":`${i*0.07}s`}}>
                <div className="pj-dc-top">
                  <div className="pj-dc-icon">{d.icon}</div>
                  <div className="pj-dc-badges">
                    <span className="pj-ieee-badge">IEEE {YEAR}</span>
                    <span className="pj-count-badge">{d.count}+ Titles</span>
                  </div>
                </div>
                <h3 className="pj-dc-title">{d.title} — CODEX PROJECT Coimbatore</h3>
                <p className="pj-dc-sub">{d.sub}</p>
                <div className="pj-dc-projects">
                  {ALL.filter(p=>{
                    if(d.id==="aiml")    return p.cat==="AI & ML";
                    if(d.id==="iot")     return p.cat==="IoT";
                    if(d.id==="embedded")return p.cat==="Embedded";
                    if(d.id==="mechanical")return p.cat==="Mechanical";
                    if(d.id==="webdev") return p.cat==="Web Dev";
                    if(d.id==="mobile") return p.cat==="Mobile App";
                    return false;
                  }).slice(0,9).map((p,pi)=>(
                    <div key={pi} className="pj-dc-item">
                      <span className="pj-dc-check">✔</span>
                      <span className="pj-dc-name">{p.name}</span>
                    </div>
                  ))}
                </div>
                <div className="pj-dc-footer">
                  <a href={d.link} className="pj-dc-btn">View All {d.title.replace(" Final Year Projects","").replace(" Projects","")} →</a>
                  <a href={`${WA}?text=Hi!%20I%20need%20${encodeURIComponent(d.title)}%20${YEAR}`}
                     target="_blank" rel="noopener noreferrer" className="pj-dc-wa">💬 Custom Title</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ───────────────────────────────────── */}
      <section className="pj-why pj-reveal" ref={ref} aria-labelledby="pj-why-h2">
        <div className="pj-container">
          <span className="pj-eyebrow">Why Choose Us</span>
          <h2 id="pj-why-h2" className="pj-sec-title">
            Why CODEX PROJECT is the Best Final Year Project Center in Coimbatore {YEAR}
          </h2>
          <div className="pj-why-grid">
            {WHY.map((w,i)=>(
              <div key={i} className="pj-why-card" style={{"--wi":`${i*0.06}s`}}>
                <span className="pj-why-icon">{w.icon}</span>
                <h3 className="pj-why-title">{w.t}</h3>
                <p className="pj-why-desc">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="pj-faq pj-reveal" ref={ref} aria-labelledby="pj-faq-h2">
        <div className="pj-container">
          <span className="pj-eyebrow">FAQ</span>
          <h2 id="pj-faq-h2" className="pj-sec-title pj-center">
            Frequently Asked Questions — Final Year Projects Coimbatore {YEAR}
          </h2>
          <div className="pj-faq-list">
            {faqSchema.mainEntity.map((f,i)=>(
              <div key={i} className={`pj-faq-item ${openFaq===i?"pj-faq-open":""}`}
                onClick={()=>setOpenFaq(openFaq===i?null:i)}
                itemScope itemType="https://schema.org/Question">
                <div className="pj-faq-q">
                  <h3 className="pj-faq-qtext" itemProp="name">{f.name}</h3>
                  <span className="pj-faq-icon">{openFaq===i?"−":"+"}</span>
                </div>
                <div className="pj-faq-body" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p itemProp="text">{f.acceptedAnswer.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO CONTENT ──────────────────────────────────── */}
      <section className="pj-seo pj-reveal" ref={ref}>
        <div className="pj-container">
          <div className="pj-seo-grid">
            <div className="pj-seo-card">
              <h2 className="pj-seo-title">{ALL.length}+ Final Year Project Titles in Coimbatore – Complete Guide {YEAR}</h2>
              <p>Searching for the <strong>best final year project ideas in Coimbatore</strong>? CODEX PROJECT at <strong>Balaji Complex, Gandhipuram, Coimbatore</strong> is the most trusted project center with <strong>{ALL.length}+ IEEE {YEAR} project titles</strong>. Whether you need <strong>AI/ML projects with TensorFlow and YOLO v8</strong>, <strong>IoT projects with Arduino and ESP32</strong>, <strong>Embedded projects with 8051 and ARM Cortex</strong>, <strong>MERN Stack web projects</strong>, or <strong>Mechanical fabrication projects</strong> — we have the right project for every student in Coimbatore.</p>
              <p>Every project includes: real-time implementation, IEEE {YEAR} format report (50–80 pages), synopsis, abstract, PPT, UML/circuit diagrams, source code with comments, viva preparation coaching, and <strong>free internship certificate</strong>. We serve PSG Tech, CIT, KMEA, Sri Krishna, KPR, Karpagam, SNS, KGISL, RVS, Rathinam, Hindusthan, Sri Eshwar, Dr NGP, Bannari Amman, and all Coimbatore colleges.</p>
            </div>
            <div className="pj-seo-card">
              <h3 className="pj-seo-subtitle">Why CODEX PROJECT wins {YEAR}</h3>
              <ul className="pj-seo-list">
                <li>✅ <strong>{ALL.length}+ IEEE {YEAR} titles</strong> — Coimbatore's largest</li>
                <li>✅ <strong>Real working demo-ready models</strong></li>
                <li>✅ <strong>Free internship certificate</strong> — all packages</li>
                <li>✅ <strong>Complete IEEE documentation</strong> — report, PPT, synopsis</li>
                <li>✅ <strong>Viva coaching</strong> — 50+ mock Q&A per project</li>
                <li>✅ <strong>Most affordable</strong> — EMI available</li>
                <li>✅ <strong>4.9★ Google rating</strong> — 320+ reviews</li>
                <li>✅ <strong>5+ years experience</strong> — 1000+ students</li>
                <li>✅ <strong>Gandhipuram location</strong> — accessible from all colleges</li>
                <li>✅ <strong>WhatsApp support</strong> — 7 days/week</li>
              </ul>
              <a href={`tel:+91${PHONE}`} className="pj-seo-cta">📞 Free Consultation: {PHONE}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEYWORD CLOUD ────────────────────────────────── */}
      <section className="pj-kw pj-reveal" ref={ref}>
        <div className="pj-container">
          <h2 className="pj-kw-title">Popular Searches — Final Year Projects Coimbatore {YEAR}</h2>
          <div className="pj-kw-grid">
            {[
              [`Final Year Project Titles Coimbatore ${YEAR}`,"/projects"],
              [`IEEE ${YEAR} Projects Coimbatore`,"/projects"],
              ["Machine Learning Projects Coimbatore","/services/software-projects"],
              ["AI Projects Coimbatore","/services/software-projects"],
              ["Python Projects Coimbatore","/services/software-projects"],
              ["Deep Learning Projects Coimbatore","/services/software-projects"],
              ["IoT Projects Coimbatore","/services/iot-projects"],
              ["Arduino Projects Coimbatore","/services/iot-projects"],
              ["Embedded Projects Coimbatore","/services/embedded-projects"],
              ["Mechanical Projects Coimbatore","/services/mechanical-projects"],
              ["MERN Stack Projects Coimbatore","/services/software-projects"],
              ["Flutter Projects Coimbatore","/services/software-projects"],
              ["Java Projects Coimbatore","/services/software-projects"],
              ["Blockchain Projects Coimbatore","/services/software-projects"],
              ["CSE Projects Coimbatore","/services/software-projects"],
              ["ECE Projects Coimbatore","/services/iot-projects"],
              ["MCA Projects Coimbatore","/services/software-projects"],
              ["Final Year Project with Certificate","/contact"],
              ["Affordable Projects Coimbatore","/contact"],
              ["Ready Made Projects Coimbatore","/projects"],
              [`Project Center Gandhipuram ${YEAR}`,"/contact"],
              ["Project Center near Peelamedu","/contact"],
            ].map(([t,h])=><a key={t} href={h} className="pj-kw-tag" aria-label={t}>{t}</a>)}
          </div>
        </div>
      </section>

      {/* ── LOCATION ─────────────────────────────────────── */}
      <section className="pj-location pj-reveal" ref={ref} aria-labelledby="pj-loc-h2">
        <div className="pj-container">
          <h2 id="pj-loc-h2" className="pj-sec-title pj-center">Visit CODEX PROJECT — Gandhipuram, Coimbatore</h2>
          <p className="pj-loc-addr">📍 <strong>{ADDR}</strong></p>
          <p className="pj-loc-desc">Accessible from Peelamedu, Saravanampatti, RS Puram, Singanallur, Ukkadam. Buses from PSG Tech, CIT, KPR, SNS, KGISL stop near Gandhipuram. Open Mon–Sat, 9 AM – 8 PM.</p>
          <div className="cp-map-wrap">
            <iframe
              src="https://www.google.com/maps?q=Codex+Project+Coimbatore&output=embed"
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              title="Codex Project location map – final year project center in Coimbatore"
              aria-label="Google Maps showing Codex Project location"
            />
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="pj-cta pj-reveal" ref={ref} aria-labelledby="pj-cta-h2">
        <div className="pj-cta-blob"/>
        <div className="pj-container">
          <h2 id="pj-cta-h2" className="pj-cta-title">
            Choose Your IEEE {YEAR} Final Year Project Today<br/>
            <span className="pj-grad">CODEX PROJECT — Gandhipuram, Coimbatore</span>
          </h2>
          <p className="pj-cta-sub">{ALL.length}+ project titles · Real working models · IEEE documentation · Internship certificate · Viva coaching</p>
          <p className="pj-cta-addr">📍 {ADDR}</p>
          <p className="pj-cta-tags">IEEE {YEAR} · All Branches · Affordable · 4.9★ Rated · WhatsApp Support</p>
          <div className="pj-cta-btns">
            <a href={`tel:+91${PHONE}`}    className="pj-btn pj-btn-gold">📞 Call: {PHONE} — Free Consultation</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="pj-btn pj-btn-wa">💬 WhatsApp Us</a>
            <a href="https://g.page/r/CUj6SjsY-0qgEAE/review" target="_blank" rel="noopener noreferrer" className="pj-btn pj-btn-outline">⭐ Review on Google</a>
          </div>
        </div>
      </section>
    </div>
  );
}