import { Bell } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Notifications() {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const notificationRef = useRef(null);

  const notifications = [
    {
      id: 1,
      title: "New Message From Laur",
      subtitle: "🕒 13 minutes ago",
      image: "/person1.png.jpg",
    },
    {
      id: 2,
      title: "New Album By Travis Scott",
      subtitle: "🕒 1 day",
      image: "/person2.png.jpg",
    },
    {
      id: 3,
      title: "Payment Successfully Completed",
      subtitle: "🕒 2 days",
      image: "/person3.png.jpeg",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setIsNotificationsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div ref={notificationRef} className="relative flex items-center">
      {/* Bell Button */}
      <button
        type="button"
        onClick={() => {
          setIsNotificationsOpen((previous) => !previous);
          setSelectedNotification(null);
        }}
        className="relative flex cursor-pointer items-center
          justify-center border-0 bg-transparent p-0
          text-slate-900 shadow-none outline-none
          focus:outline-none focus-visible:outline-none"
        aria-label="Notifications"
        title="Notifications"
        aria-expanded={isNotificationsOpen}
      >
        <Bell size={17} />
      </button>

      {/* Notifications Panel */}
      {isNotificationsOpen && (
        <div
          className="absolute right-0 top-8 z-50
            w-[320px] max-w-[calc(100vw-24px)]
            overflow-hidden rounded-lg border border-gray-100
            bg-white p-1.5 text-slate-700 shadow-xl"
        >
          {notifications.map((notification) => (
            <button
              key={notification.id}
              type="button"
              onClick={() => {
                setSelectedNotification(notification.id);
                setIsNotificationsOpen(false);
              }}
              className={`flex w-full cursor-pointer items-center
                gap-3 rounded-[7px] px-2 py-1 pl-4
                text-left transition-all duration-200
                ${
                  selectedNotification === notification.id
                    ? "bg-gray-100 shadow-sm"
                    : "bg-white hover:bg-gray-200"
                }`}
            >
              <img
                src={notification.image}
                alt="Profile"
                className="h-8 w-8 shrink-0
                  rounded-[10px] object-cover"
              />

              <span className="min-w-0 flex-1">
                <span className="block text-[14px] font-medium">
                  {notification.id === 1 ? (
                    <>
                      <span className="font-bold">New Message</span>
                      <span> From Laur</span>
                    </>
                  ) : notification.id === 2 ? (
                    <>
                      <span className="font-bold">New Album</span>
                      <span> By Travis Scott</span>
                    </>
                  ) : (
                    notification.title
                  )}
                </span>

                <span className="mt-2 block text-[12px] text-gray-500">
                  {notification.subtitle}
                </span>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Notifications;