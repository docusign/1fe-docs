// Custom sidebar behavior for Starlight
// This script adds auto-focus to index pages and accordion-style folder collapsing

document.addEventListener("DOMContentLoaded", function () {
  // Wait for Starlight to fully initialize
  setTimeout(initCustomSidebarBehavior, 100);
});

function initCustomSidebarBehavior() {
  const sidebar = document.querySelector(".sidebar-content");
  if (!sidebar) return;

  // Find all collapsible groups (folders) in the sidebar
  const groups = sidebar.querySelectorAll(".sidebar-content details");

  groups.forEach((group) => {
    const summary = group.querySelector("summary");
    if (!summary) return;

    summary.addEventListener("click", function (e) {
      const isCurrentlyOpen = group.hasAttribute("open");

      // If clicking to open this group
      if (!isCurrentlyOpen) {
        // Close all other groups (accordion behavior)
        groups.forEach((otherGroup) => {
          if (otherGroup !== group && otherGroup.hasAttribute("open")) {
            otherGroup.removeAttribute("open");
          }
        });

        // Auto-navigate to index page after a short delay
        setTimeout(() => {
          const indexLink = group.querySelector(
            'a[href*="/index"], a[href$="/"]'
          );
          if (indexLink) {
            // Check if we're not already on this page
            if (window.location.pathname !== indexLink.getAttribute("href")) {
              window.location.href = indexLink.getAttribute("href");
            }
          }
        }, 150); // Small delay to allow the expansion animation
      }
    });
  });
}

// Re-initialize when navigating between pages (for SPA behavior)
document.addEventListener("astro:page-load", initCustomSidebarBehavior);

