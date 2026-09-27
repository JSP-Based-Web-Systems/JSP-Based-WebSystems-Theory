package sample.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/book-notice")
public class BookNoticeServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws IOException {

		// Sample data: Prepare the data inside the request-handling method.
		String bookTitle = "Getting Started with Web Development";
		int availableCopies = 3;

		// Set the response content type and character encoding
		// before obtaining the output writer.
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();

		out.println("<!DOCTYPE html>");
		out.println("<html lang=\"en\">");
		out.println("<head><meta charset=\"UTF-8\">");
		out.println("<title>Book Information</title></head>");
		out.println("<body><main>");
		out.println("<h1>Book Information</h1>");
		out.println("<p>Book Title: " + bookTitle + "</p>");
		out.println("<p>Available Copies: " + availableCopies + "</p>");
		out.println("</main></body></html>");
	}
}