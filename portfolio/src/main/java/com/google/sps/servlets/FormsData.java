//Imports
package com.google.sps.servlets;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.FullEntity;
import com.google.cloud.datastore.KeyFactory;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.jsoup.Jsoup;
import org.jsoup.safety.Whitelist;

@WebServlet("/form")
public class FormsData extends HttpServlet {
    
    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // Sanitizing the information to avoid cross-site scripting
    String name = Jsoup.clean(request.getParameter("name-input"), Whitelist.none());
    String email = Jsoup.clean(request.getParameter("email-input"), Whitelist.none());
    String message = Jsoup.clean(request.getParameter("message-input"), Whitelist.none());
    long timestamp = System.currentTimeMillis();

    Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
    KeyFactory keyFactory = datastore.newKeyFactory().setKind("Forms");
    FullEntity taskEntity =
        Entity.newBuilder(keyFactory.newKey())
            .set("name", name)
            .set("email", email)
            .set("message", message)
            .set("timestamp", timestamp)
            .build();
    datastore.put(taskEntity);

    response.sendRedirect("/contact.html");
  }
}


