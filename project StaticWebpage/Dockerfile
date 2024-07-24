# Use the official Apache HTTPD image as the base image
FROM httpd:latest

# Set the working directory to /usr/local/apache2/htdocs
WORKDIR /usr/local/apache2/htdocs

# Copy the content of the current directory to the container's working directory
COPY . .

# Expose port 80
EXPOSE 80

# Run Apache in the foreground
CMD ["httpd-foreground"]
