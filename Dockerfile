# Etapa de construcción: Utiliza la imagen oficial de Maven/Java 17 para crear un artefacto de construcción
FROM maven:3.8.4-openjdk-17-slim as builder

WORKDIR /app
COPY pom.xml .
COPY src ./src

# Construye un artefacto de lanzamiento.
RUN mvn clean package -DskipTests

# Depura: Lista los archivos en el directorio target para verificar la creación del JAR
RUN ls /app/target/

# Etapa de ejecución: Usa una imagen de OpenJDK 17 para una etapa de producción más ligera
FROM openjdk:17-jdk-slim

EXPOSE 8080

# Copia el JAR usando un comodín para evitar problemas de nombres de archivos
COPY --from=builder /app/target/*.jar /app.jar

ENV JAVA_OPTS=""

CMD exec java $JAVA_OPTS -jar /app.jar
