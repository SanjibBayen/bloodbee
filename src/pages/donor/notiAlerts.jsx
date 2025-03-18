import React from "react";
import { Container, Card } from "react-bootstrap";
import { FaBell, FaExclamationCircle, FaHeart } from "react-icons/fa";

const notifications = [
  {
    id: 1,
    title: "Upcoming Appointment",
    message: "You have an appointment scheduled for blood donation on March 20, 2025.",
    date: "March 18, 2025",
    type: "info", // General info
  },
  {
    id: 2,
    title: "Urgent Blood Request",
    message: "Urgent need for O+ blood at City Hospital. Please donate if you can.",
    date: "March 17, 2025",
    type: "alert", // High priority
  },
  {
    id: 3,
    title: "Thank You for Donating",
    message: "Thank you for your recent blood donation. Your contribution is greatly appreciated.",
    date: "March 15, 2025",
    type: "success", // Gratitude
  },
];

const getNotificationStyle = (type) => {
  switch (type) {
    case "alert":
      return { bg: "danger", icon: <FaExclamationCircle className="text-danger me-2" /> };
    case "success":
      return { bg: "success", icon: <FaHeart className="text-success me-2" /> };
    default:
      return { bg: "primary", icon: <FaBell className="text-primary me-2" /> };
  }
};

const Notifications = () => {
  return (
    <Container className="mt-4" style={{ maxWidth: "600px" }}>
      <h2 className="text-center mb-4">🔔 Notifications & Alerts</h2>
      {notifications.map((notification) => {
        const { bg, icon } = getNotificationStyle(notification.type);
        return (
          <Card key={notification.id} className={`border-${bg} shadow-sm rounded-3 mb-3`} style={{ background: "#fff8e1" }}>
            <Card.Body className="d-flex align-items-center">
              <div className="me-3 fs-4">{icon}</div>
              <div>
                <Card.Title className="mb-1">{notification.title}</Card.Title>
                <Card.Text className="text-muted mb-1">📅 {notification.date}</Card.Text>
                <Card.Text>{notification.message}</Card.Text>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};

export default Notifications;
