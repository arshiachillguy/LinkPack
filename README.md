# LinkPack - URL Shortener Service

A robust and efficient URL shortener service built with Java and Spring Boot. LinkPack allows you to transform long URLs into short, manageable links while providing comprehensive analytics.

## Features

- **URL Shortening**: Convert long URLs into short, shareable links
- **Click Analytics**: Track total clicks for each shortened link
- **Timestamps**: Monitor creation time and access times
- **RESTful API**: Clean and intuitive API endpoints
- **Spring Boot**: Built with Java and Spring Boot framework
- **Data Persistence**: Secure storage of URLs and analytics data

## Tech Stack

- **Backend**: Java, Spring Boot
- **Database**: (Configure your preferred database)
- **Build Tool**: Maven
- **API Documentation**: Spring REST Docs/Swagger

## API Endpoints

### Shorten URL
```
POST /api/shorten
Content-Type: application/json

{
  "originalUrl": "https://example.com/very-long-url-path"
}
```

Response:
```json
{
  "shortUrl": "https://yourdomain.com/abc123",
  "originalUrl": "https://example.com/very-long-url-path",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

### Get URL Analytics
```
GET /api/analytics/{shortCode}
```

## Getting Started

### Prerequisites
- Java 17 or higher
- Maven 3.6+
- Your preferred database (H2, MySQL, PostgreSQL, etc.)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/linkpack.git
cd linkpack
```

2. Configure database in `application.properties`
```properties
spring.datasource.url=your_database_url
spring.datasource.username=your_username
spring.datasource.password=your_password
```

3. Build the application
```bash
mvn clean install
```

4. Run the application
```bash
mvn spring-boot:run
```

## Usage

1. Start the application
2. Use the `/api/shorten` endpoint to create short URLs
3. Share the generated short URL
4. Monitor clicks and analytics through `/api/analytics/{shortCode}`


## Support

For support and questions, please open an issue in the GitHub repository or contact the development team.
