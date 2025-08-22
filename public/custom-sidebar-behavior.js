// Custom sidebar behavior for Starlight
// Adds auto-focus to index pages when opening folders

(function () {
  "use strict";

  let isInitialized = false;
  let processingClick = false; // Prevent infinite loops

  function initCustomSidebarBehavior() {
    if (isInitialized) return;

    // Try multiple selectors to find the sidebar
    const sidebar =
      document.querySelector(".sidebar-content") ||
      document.querySelector("[data-sidebar]") ||
      document.querySelector(".sidebar") ||
      document.querySelector("nav[aria-label*='Sidebar']") ||
      document.querySelector("aside");

    if (!sidebar) {
      console.log("Sidebar not found, retrying...");
      // Only retry a few times to prevent infinite retries
      setTimeout(initCustomSidebarBehavior, 500);
      return;
    }

    // Find all collapsible groups (folders) in the sidebar
    let groups = sidebar.querySelectorAll("details");

    // If no details found, try looking in the entire document
    if (groups.length === 0) {
      groups = document.querySelectorAll("details");
    }

    if (groups.length === 0) {
      console.log("No collapsible groups found");
      return;
    }

    console.log(`Found ${groups.length} sidebar groups`);

    groups.forEach((group, index) => {
      const summary = group.querySelector("summary");
      if (!summary) return;

      // Add click listener without cloning (which was causing issues)
      summary.addEventListener("click", function (e) {
        if (processingClick) return; // Prevent infinite loops

        const isCurrentlyOpen = group.hasAttribute("open");
        console.log(
          `Clicked group ${index}, currently open: ${isCurrentlyOpen}`
        );

        // If clicking to open this group
        if (!isCurrentlyOpen) {
          processingClick = true;

          // Auto-navigate to index page immediately
          const links = group.querySelectorAll("a[href]");
          let indexLink = null;

          // Try to find index page
          for (const link of links) {
            const href = link.getAttribute("href");
            if (
              href &&
              (href.endsWith("/") ||
                href.includes("/index") ||
                href.split("/").pop() === "")
            ) {
              indexLink = link;
              break;
            }
          }

          // If no specific index found, use the first link
          if (!indexLink && links.length > 0) {
            indexLink = links[0];
          }

          if (indexLink) {
            const targetHref = indexLink.getAttribute("href");
            console.log(`Auto-navigating to: ${targetHref}`);

            // Check if we're not already on this page
            if (window.location.pathname !== targetHref) {
              window.location.href = targetHref;
            }
          }

          processingClick = false;
        } else {
          processingClick = false;
        }
      });
    });

    isInitialized = true;
    console.log("Custom sidebar behavior initialized successfully");
  }

  // Simple initialization
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(initCustomSidebarBehavior, 100);
    });
  } else {
    setTimeout(initCustomSidebarBehavior, 100);
  }

  // Re-initialize on page changes (but with protection against loops)
  document.addEventListener("astro:page-load", function () {
    isInitialized = false;
    processingClick = false;
    setTimeout(initCustomSidebarBehavior, 200);
  });

  // Debug function
  window.debugSidebar = function () {
    const sidebar =
      document.querySelector(".sidebar-content") ||
      document.querySelector("aside");
    const groups = document.querySelectorAll("details");
    console.log("Sidebar debug:");
    console.log("Sidebar element:", sidebar);
    console.log("Found groups:", groups.length);
    groups.forEach((group, i) => {
      console.log(
        `Group ${i}:`,
        group.querySelector("summary")?.textContent,
        "Open:",
        group.hasAttribute("open")
      );
    });
  };
})();
