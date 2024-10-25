
---
# CharityPillar

CharityPillar is a web-based donation platform focused on providing critical support for the Israelite community affected by the Iranian conflict. Our mission is to offer a reliable and transparent way for donors around the world to make a positive impact by providing essential resources to those in need.

## Features

- **Secure Donations:** All donations are securely processed and go directly toward providing food, shelter, and medical aid for beneficiaries.
- **Email Updates:** Donors receive updates on how their contributions are making a difference, along with thank-you messages from the recipients.
- **User-Friendly Interface:** Built with simplicity in mind, allowing donors to easily navigate and make contributions without hassle.

## Tech Stack

- **Backend:** Spring Boot (Java), Hibernate (ORM), MySQL
- **Frontend:** Thymeleaf, HTML, CSS
- **Additional Tools:** Lombok for cleaner code with automatic generation of getters and setters, Heroku (or another platform of choice) for deployment, and email functionality via Spring Boot Mail.

## Getting Started

### Prerequisites

- Java 17
- Maven or Gradle (for dependency management)
- MySQL (for database)
- [Lombok Plugin](https://projectlombok.org/) (if using an IDE)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Christophchi/charitypillar.git
   cd charitypillar
   ```

2. **Configure the Database**:
   Update the `application.properties` file with your MySQL connection details.
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/springdb
   spring.datasource.username=yourusername
   spring.datasource.password=yourpassword
   ```

3. **Run the Application**:
   Use Maven or Gradle to build and run the application.
   ```bash
   mvn spring-boot:run
   ```
   or
   ```bash
   ./gradlew bootRun
   ```

### Deployment

To deploy the application on [Heroku](https://www.heroku.com/) or any other suitable platform, ensure the database and environment variables are configured appropriately.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## Author

- **Christopher Okoye** - Developer and founder of CharityPillar. For more projects and services, visit [codedwebltd.org](https://codedwebltd.org).

---

CharityPillar is developed by CodedWebLtd. All rights reserved.