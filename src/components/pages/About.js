import React from "react";

export default function About() {
  return (
    <div>
      <h1 className="display-4">{this.props.match.params.id}</h1>
      <p className="lead">Simple app to manage contacts</p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  );
}
