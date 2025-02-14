import { useParams } from "react-router-dom";

const languageData = {
  "bash": {
    title: "Bash",
    description: `
      Bash (Bourne Again Shell) is a **Unix shell and command language** that is widely used for scripting and automation.
      Developed as a free software replacement for the original Bourne shell (sh), Bash has become the default shell for 
      Linux and macOS systems.
      
      Bash allows users to **automate tasks, create scripts, and manage system operations** efficiently.
      It provides powerful **command-line tools**, script execution capabilities, and job control.
      Developers and system administrators frequently use Bash for **task automation, system monitoring, 
      and server management**.
    `,
    features: [
      "Command-line interface for Linux and macOS",
      "Supports shell scripting for automation",
      "Powerful text processing with sed and awk",
      "Job scheduling and background processes",
      "Extensive built-in commands and utilities"
    ],
    useCases: [
      "Automating server tasks",
      "Writing system administration scripts",
      "Data processing and text manipulation",
      "Building and deploying software",
      "Managing Linux-based environments"
    ],
    officialLink: "https://www.gnu.org/software/bash/"
  },

  "c++": {
    title: "C++",
    description: `
      C++ is a **high-performance, object-oriented programming language** designed for system-level programming.
      Originally created by Bjarne Stroustrup in 1985, C++ is widely used in software development, game engines, 
      embedded systems, and high-performance applications.

      C++ supports **multiple programming paradigms**, including procedural, object-oriented, and generic programming.
      It provides **low-level memory manipulation** while still offering high-level abstractions, making it ideal for 
      **performance-critical applications** such as game development, real-time simulations, and financial systems.
    `,
    features: [
      "Object-oriented programming",
      "Memory management with pointers",
      "Support for multi-threading and concurrency",
      "Extensive Standard Template Library (STL)",
      "Used for performance-intensive applications"
    ],
    useCases: [
      "Game Development (Unreal Engine, Unity)",
      "High-performance computing",
      "Embedded systems and IoT",
      "Operating system development",
      "Financial software and trading platforms"
    ],
    officialLink: "https://isocpp.org/"
  },

  "csharp": {
    title: "C#",
    description: `
      C# (C-Sharp) is a **modern, object-oriented programming language** developed by Microsoft as part of its .NET framework.
      Created by Anders Hejlsberg in 2000, C# is widely used for developing Windows applications, web applications, 
      and game development using Unity.
      
      C# combines the power of C++ with the ease of Java, providing a structured programming approach with features like
      **garbage collection, strong type-checking, and asynchronous programming**.
      It is extensively used in **enterprise applications, mobile development (Xamarin), and cloud computing (Azure)**.
    `,
    features: [
      "Object-oriented programming language",
      "Automatic memory management (Garbage Collection)",
      "Asynchronous programming with async/await",
      "Seamless integration with .NET ecosystem",
      "Supports multi-platform development (Windows, macOS, Linux)"
    ],
    useCases: [
      "Desktop application development",
      "Game development with Unity",
      "Web development using ASP.NET",
      "Cloud applications (Microsoft Azure)",
      "Enterprise software solutions"
    ],
    officialLink: "https://learn.microsoft.com/en-us/dotnet/csharp/"
  },

  "go": {
    title: "Go",
    description: `
      Go (Golang) is an **open-source programming language** developed by Google in 2009 for building scalable, efficient, 
      and high-performance software.
      
      Designed with simplicity and concurrency in mind, Go provides **fast execution, garbage collection, and easy-to-read syntax**.
      It is widely used for **backend development, cloud computing, and microservices architecture** due to its 
      **lightweight nature and efficient memory management**.
    `,
    features: [
      "Statically typed with simple syntax",
      "Efficient garbage collection",
      "Concurrency support with Goroutines",
      "Compiled to native machine code",
      "Great for distributed systems and cloud computing"
    ],
    useCases: [
      "Cloud computing (Docker, Kubernetes)",
      "Backend web services",
      "Network programming",
      "Microservices development",
      "Command-line tools"
    ],
    officialLink: "https://go.dev/"
  },

  "html-css": {
    title: "HTML & CSS",
    description: `
      HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) form the foundation of web development.
      HTML provides the **structure and content** of web pages, while CSS controls **styling, layout, and visual design**.
      
      These technologies are essential for **creating modern, responsive websites** and are used alongside JavaScript 
      to build interactive web applications.
    `,
    features: [
      "Markup language for structuring content",
      "CSS controls layout and design",
      "Supports responsive web design",
      "Essential for front-end development",
      "Works across all web browsers"
    ],
    useCases: [
      "Website development",
      "UI/UX design",
      "Building landing pages",
      "Email templates",
      "Cross-platform web applications"
    ],
    officialLink: "https://developer.mozilla.org/en-US/docs/Learn/HTML"
  },

  "kotlin": {
    title: "Kotlin",
    description: `
      Kotlin is a **modern, statically-typed programming language** developed by JetBrains for Android, web, and backend development.
      It is officially supported by Google for Android app development and offers **interoperability with Java**.
      
      Kotlin provides **null safety, concise syntax, and functional programming** features, making it a preferred choice 
      for developers who want to write cleaner and more maintainable code.
    `,
    features: [
      "Concise and expressive syntax",
      "Interoperable with Java",
      "Null safety to prevent crashes",
      "Functional programming support",
      "Used for Android, backend, and web development"
    ],
    useCases: [
      "Android app development",
      "Backend development (Ktor, Spring Boot)",
      "Cross-platform mobile development (Kotlin Multiplatform)",
      "Game development",
      "Modern web applications"
    ],
    officialLink: "https://kotlinlang.org/"
  },

  "php": {
    title: "PHP",
    description: `
      PHP (Hypertext Preprocessor) is a **server-side scripting language** designed for web development.
      It is widely used for building **dynamic websites, content management systems (CMS), and eCommerce platforms**.
      
      PHP powers popular platforms like **WordPress, Drupal, and Magento**, making it a critical technology in web development.
      It can be easily embedded within HTML, and it supports interaction with databases such as MySQL.
    `,
    features: [
      "Server-side scripting language",
      "Built-in support for databases",
      "Cross-platform compatibility",
      "Widely used in web hosting and CMS",
      "Supports object-oriented programming"
    ],
    useCases: [
      "Web application development",
      "Content Management Systems (WordPress, Joomla)",
      "eCommerce platforms",
      "API development",
      "Database-driven applications"
    ],
    officialLink: "https://www.php.net/"
  },

  "python": {
    title: "Python",
    description: `
      Python is a high-level, interpreted programming language known for its simplicity, readability, and vast ecosystem. 
      It was created by Guido van Rossum in 1991 and has since become one of the most popular programming languages worldwide.
      Python is widely used in various domains such as web development, data science, artificial intelligence (AI), 
      machine learning, automation, and scientific computing.
      
      Python's extensive standard library and active community make it a go-to choice for beginners and professionals alike.
      Companies like Google, Facebook, NASA, and Spotify use Python for various applications, making it a crucial language to learn.
      
      Its syntax is clean and straightforward, resembling human-readable English, which significantly reduces development time.
      Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming.
      
      In the world of **data science**, Python dominates due to powerful libraries such as **NumPy, pandas, TensorFlow, and Scikit-learn**.
      Its vast collection of frameworks and tools allows developers to build web applications (**Django, Flask**), 
      automate repetitive tasks, or even develop high-performance games.
    `,
    features: [
      "Easy-to-learn syntax",
      "Extensive standard library",
      "Cross-platform compatibility",
      "Dynamic typing",
      "Garbage collection",
      "Wide range of third-party modules"
    ],
    useCases: [
      "Web Development (Django, Flask)",
      "Data Science & Machine Learning",
      "Automation & Scripting",
      "Game Development (Pygame)",
      "Cybersecurity & Ethical Hacking",
      "Embedded Systems & IoT"
    ],
    officialLink: "https://www.python.org/"
  },

  "java": {
    title: "Java",
    description: `
      Java is a **high-level, object-oriented programming language** designed for portability and cross-platform compatibility.
      It was created by **James Gosling at Sun Microsystems** in 1995 and has remained a dominant force in enterprise software, 
      Android app development, and large-scale systems.
      
      One of Java’s core strengths is its ability to run on any platform that supports the **Java Virtual Machine (JVM)**, 
      making it truly **Write Once, Run Anywhere (WORA)**. Java is known for its strong memory management, multi-threading capabilities, 
      and security features, which make it a preferred language for banking, finance, and large-scale applications.
      
      Java is extensively used in **Android app development**, as the Android SDK relies heavily on Java.
      Companies like Amazon, Google, and Netflix rely on Java for backend systems, microservices, and cloud applications.
    `,
    features: [
      "Platform Independence (JVM-based)",
      "Strongly typed and Object-Oriented",
      "Automatic Garbage Collection",
      "Multi-threading support",
      "Rich API and Standard Library"
    ],
    useCases: [
      "Enterprise Applications (Spring, Hibernate)",
      "Android App Development",
      "Cloud-based Applications",
      "Big Data Technologies (Hadoop, Spark)",
      "Internet of Things (IoT)"
    ],
    officialLink: "https://www.java.com/"
  },

  "javascript": {
    title: "JavaScript",
    description: `
      JavaScript (JS) is the **language of the web**, enabling interactive and dynamic web applications.
      It was originally developed by Brendan Eich in 1995 for Netscape but has now become a fundamental technology 
      alongside HTML and CSS in modern web development.
      
      JavaScript allows developers to build **responsive front-end applications** with libraries like **React, Vue, and Angular**.
      On the server side, JavaScript powers **Node.js**, allowing developers to build scalable and high-performance web servers.
      
      With the rise of **full-stack JavaScript** (MERN/MEAN stacks), developers can use a single language across both client and server,
      making development more efficient. It’s used in building **progressive web apps (PWAs), real-time applications**, 
      and even **mobile applications** using frameworks like React Native.
    `,
    features: [
      "Client-side and Server-side execution",
      "Asynchronous programming with Promises & Async/Await",
      "Event-driven architecture",
      "Rich ecosystem (React, Vue, Node.js)",
      "Supports Web APIs for enhanced browser functionality"
    ],
    useCases: [
      "Interactive Web Development",
      "Single Page Applications (SPA)",
      "Backend Development with Node.js",
      "Game Development (Three.js, Phaser)",
      "Cross-Platform Mobile Apps (React Native)"
    ],
    officialLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },

  "r": {
    title: "R",
    description: `
      R is a **programming language and environment** used primarily for **statistical computing and data visualization**.
      Developed by Ross Ihaka and Robert Gentleman in the early 1990s, R is widely used by **statisticians, data scientists, 
      and researchers** for analyzing large datasets.
      
      R has a rich ecosystem with powerful **libraries such as ggplot2, dplyr, and tidyr** for data visualization and manipulation.
      It is extensively used in **machine learning, finance, healthcare, and academic research**.
    `,
    features: [
      "Extensive support for statistical analysis",
      "Data visualization with ggplot2 and base R",
      "Open-source and highly extensible",
      "Integrates with Python and SQL",
      "Large community and academic adoption"
    ],
    useCases: [
      "Data science and machine learning",
      "Statistical computing and analytics",
      "Financial modeling and quantitative analysis",
      "Healthcare and bioinformatics research",
      "Big data visualization"
    ],
    officialLink: "https://www.r-project.org/"
  },

  "ruby": {
    title: "Ruby",
    description: `
      Ruby is a **dynamic, interpreted programming language** designed for simplicity and productivity.
      Created by Yukihiro Matsumoto in the mid-1990s, Ruby focuses on **developer happiness** with a clean, 
      readable syntax.
      
      Ruby is best known for **Ruby on Rails (RoR)**, a powerful web application framework that follows 
      the **convention over configuration** principle. It is widely used for **web development, automation, 
      and scripting**.
    `,
    features: [
      "Highly readable and developer-friendly syntax",
      "Dynamic and object-oriented programming",
      "Built-in garbage collection and memory management",
      "Powerful web framework: Ruby on Rails",
      "Supports metaprogramming for flexible code structures"
    ],
    useCases: [
      "Web application development (Rails framework)",
      "Scripting and automation",
      "Prototyping and rapid application development",
      "Building APIs and microservices",
      "Data processing and parsing"
    ],
    officialLink: "https://www.ruby-lang.org/en/"
  },

  "sql": {
    title: "SQL",
    description: `
      SQL (Structured Query Language) is a **standardized language** for **managing and manipulating relational databases**.
      Originally developed in the 1970s, SQL is the backbone of modern database management systems (DBMS) like **MySQL, 
      PostgreSQL, SQL Server, and Oracle**.
      
      SQL allows users to **query, insert, update, and delete data efficiently** using **structured commands**.
      It is essential for **data analytics, software applications, and enterprise database management**.
    `,
    features: [
      "Declarative language for database management",
      "Supports CRUD operations (Create, Read, Update, Delete)",
      "Joins and relationships for relational databases",
      "Indexing for fast data retrieval",
      "Widely used in data analytics and business intelligence"
    ],
    useCases: [
      "Database management and administration",
      "Data warehousing and analytics",
      "Back-end development for applications",
      "Business intelligence and reporting",
      "Data integration and ETL (Extract, Transform, Load)"
    ],
    officialLink: "https://www.w3schools.com/sql/"
  },

  "swift": {
    title: "Swift",
    description: `
      Swift is a **modern, powerful, and safe programming language** developed by Apple for building iOS, macOS, 
      watchOS, and tvOS applications.
      Released in 2014, Swift replaces **Objective-C** with a more concise, type-safe, and efficient syntax.
      
      Swift is optimized for **performance and safety**, making it ideal for **mobile development, Apple ecosystems, 
      and high-performance applications**.
    `,
    features: [
      "Modern, concise, and safe syntax",
      "Fast execution with high-performance optimizations",
      "Automatic memory management with ARC",
      "Interoperable with Objective-C",
      "Extensive support for Apple's ecosystem (iOS, macOS, watchOS, tvOS)"
    ],
    useCases: [
      "iOS and macOS application development",
      "Game development (SpriteKit, SceneKit)",
      "Augmented Reality (ARKit, RealityKit)",
      "Wearable and smart device applications",
      "Machine learning on Apple devices"
    ],
    officialLink: "https://developer.apple.com/swift/"
  }
};

const LanguagePage = () => {
  const { languageName } = useParams();
  const decodedLang = decodeURIComponent(languageName);  // Handle URL encoding
  const language = languageData[decodedLang];

  if (!language) {
    return <h2 className="text-center text-2xl font-bold text-white mt-10">Language Not Found</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      {/* Hero Section */}
      <div className="text-center bg-gray-800 p-6 w-full rounded-md">
        <h1 className="text-5xl font-bold text-yellow-200">{language.title}</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">{language.description}</p>
      </div>

      {/* Key Features */}
      <div className="mt-8 max-w-4xl">
        <h2 className="text-3xl font-semibold text-blue-200">Key Features</h2>
        <ul className="mt-3 list-disc list-inside text-gray-300">
          {language.features.map((feature, index) => (
            <li key={index} className="mt-2">{feature}</li>
          ))}
        </ul>
      </div>

      {/* Use Cases */}
      <div className="mt-8 max-w-4xl">
        <h2 className="text-3xl font-semibold text-blue-200">Use Cases</h2>
        <ul className="mt-3 list-disc list-inside text-gray-300">
          {language.useCases.map((useCase, index) => (
            <li key={index} className="mt-2">{useCase}</li>
          ))}
        </ul>
      </div>

      {/* Official Documentation */}
      <div className="mt-10">
        <a
          href={language.officialLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-semibold bg-yellow-200 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
        >
          Visit {language.title} Official Website
        </a>
      </div>
    </div>
  );
};

export default LanguagePage;
