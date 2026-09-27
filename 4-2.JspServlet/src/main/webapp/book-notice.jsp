<%@ page contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" %>
<%
	// Sample data for comparing the two implementation approaches
	String bookTitle = "Getting Started with Web Development";
	int availableCopies = 3;
%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Book Information</title>
</head>
<body>
	<main>
		<h1>Book Information</h1>
		<p>Book Title: <%= bookTitle %></p>
		<p>Available Copies: <%= availableCopies %></p>
	</main>
</body>
</html>