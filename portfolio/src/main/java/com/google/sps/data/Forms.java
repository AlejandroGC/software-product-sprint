package com.google.sps.data;

/** An item on a forms contact. */
public final class Forms {

  private final long id;
  private final String name;
  private final String email;
  private final String message;
  private final long timestamp;

  public Forms(long id, String name, String email, String message, long timestamp) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.message = message;
    this.timestamp = timestamp;
  }
}