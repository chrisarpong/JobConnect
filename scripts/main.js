// Custom JavaScript for Job Connect Page

document.addEventListener('DOMContentLoaded', function() {
    // This ensures the script runs after the entire HTML document has been loaded and parsed.
    console.log("Job Connect page loaded successfully!");

    // --- Language Selector Logic ---
    const languageDropdownToggle = document.getElementById('languageDropdown');
    const languageDropdownItems = document.querySelectorAll('#languageDropdown + .dropdown-menu .dropdown-item');

    languageDropdownItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const selectedLang = this.dataset.lang;
            // Update the dropdown text to reflect the selected language
            languageDropdownToggle.innerHTML = `<i class="bi bi-globe"></i> ${selectedLang.toUpperCase()}`;
            console.log(`Language changed to: ${selectedLang}`);

            // In a real application, you would load translations here.
            // For a static HTML page, you'd typically hide/show elements based on language classes
            // or fetch content from a JSON file.
        });
    });

    // --- Popular Search Tags Interaction (only on index.html) ---
    // Check if the current page is index.html before applying these listeners
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        const popularTags = document.querySelectorAll('.popular-searches .badge');
        popularTags.forEach(tag => {
            tag.addEventListener('mouseover', function() {
                console.log(`Hovered over tag: ${this.innerText}`);
            });

            tag.addEventListener('click', function() {
                const searchInput = document.querySelector('.search-bar-custom input[placeholder="Job title, keywords, or company"]');
                if (searchInput) {
                    searchInput.value = this.innerText;
                    console.log(`Search input set to: ${this.innerText}`);
                    // In a real app, you might trigger a search or update filters
                }
            });
        });
    }


    // --- Featured Jobs Carousel Navigation Placeholder (only on index.html) ---
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        const prevBtn = document.querySelector('.carousel-nav-btn:first-child');
        const nextBtn = document.querySelector('.carousel-nav-btn:last-child');
        const featuredJobsRow = document.querySelector('.featured-jobs-section .row'); // The row containing job cards

        if (prevBtn && nextBtn && featuredJobsRow) {
            prevBtn.addEventListener('click', function() {
                console.log("Previous job card clicked (carousel navigation placeholder)");
                // Example: featuredJobsRow.scrollBy({ left: -300, behavior: 'smooth' });
                // For a true carousel, you'd manage active slides and transitions.
            });

            nextBtn.addEventListener('click', function() {
                console.log("Next job card clicked (carousel navigation placeholder)");
                // Example: featuredJobsRow.scrollBy({ left: 300, behavior: 'smooth' });
            });
        }
    }


    // --- Category Cards Click Interaction (only on index.html) ---
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        const categoryCards = document.querySelectorAll('.category-card');
        categoryCards.forEach(card => {
            card.addEventListener('click', function() {
                const categoryName = this.querySelector('.card-title').innerText;
                console.log(`Navigating to jobs in category: ${categoryName}`);
                // In a real application, this would redirect to a category-specific job listing page
                // window.location.href = `/jobs?category=${categoryName.toLowerCase()}`;
            });
        });
    }

    // --- Interview Schedule Modal Placeholder (only on index.html, but modal definition is global) ---
    // The modal itself is defined in index.html, but the JS logic for its form submission
    // should ideally be on a page where a user would actually schedule an interview.
    // For now, keeping it here as it was, but noting it's tied to index.html's modal trigger.
    const interviewScheduleForm = document.querySelector('#interviewScheduleModal form');
    if (interviewScheduleForm) {
        interviewScheduleForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            const date = document.getElementById('interviewDate').value;
            const time = document.getElementById('interviewTime').value;
            const notes = document.getElementById('interviewNotes').value;
            console.log(`Interview scheduled for: ${date} at ${time}. Notes: ${notes}`);
            // In a real app, this would send data to your backend/Google Calendar API
            // Close the modal after submission (Bootstrap's modal hide method)
            const modal = bootstrap.Modal.getInstance(document.getElementById('interviewScheduleModal'));
            modal.hide();
            // Display a success message to the user
            console.log("Interview scheduling simulated successfully!");
        });
    }

    // --- Advanced Search Modal Placeholder (only on index.html, but modal definition is global) ---
    const advancedSearchForm = document.querySelector('#advancedSearchModal form');
    if (advancedSearchForm) {
        advancedSearchForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            const category = document.getElementById('jobCategory').value;
            const type = document.getElementById('jobType').value;
            const level = document.getElementById('experienceLevel').value;
            const salary = document.getElementById('salaryRange').value;
            const keywords = document.getElementById('keywords').value;

            console.log(`Advanced search filters applied:
                Category: ${category}
                Type: ${type}
                Level: ${level}
                Salary: ${salary}
                Keywords: ${keywords}`);
            // In a real app, this would trigger a filtered job search
            // Close the modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('advancedSearchModal'));
            modal.hide();
            console.log("Advanced search filters applied successfully!");
        });
    }

    // --- Notification Bell Click Placeholder ---
    const notificationsDropdown = document.getElementById('notificationsDropdown');
    if (notificationsDropdown) {
        notificationsDropdown.addEventListener('show.bs.dropdown', function () {
            // When the dropdown is shown, you might fetch new notifications
            console.log("Notifications dropdown opened. Fetching latest notifications...");
            // In a real app, you'd make an API call to your backend
            // Also, clear the badge count
            const notificationCount = this.querySelector('.notification-count');
            if (notificationCount) {
                notificationCount.innerText = '0'; // Clear count on opening
                notificationCount.classList.remove('bg-danger'); // Remove red background
                notificationCount.classList.add('bg-secondary'); // Change to a neutral color
            }
        });
    }

    // --- Chat Offcanvas Placeholder ---
    const chatOffcanvas = document.getElementById('chatOffcanvas');
    if (chatOffcanvas) {
        chatOffcanvas.addEventListener('show.bs.offcanvas', function () {
            console.log("Chat offcanvas opened. Loading recent messages...");
            // In a real app, you'd load chat history and establish a WebSocket connection
        });

        const chatInput = chatOffcanvas.querySelector('input[type="text"]');
        const sendButton = chatOffcanvas.querySelector('.btn-primary');

        if (chatInput && sendButton) {
            sendButton.addEventListener('click', function() {
                const message = chatInput.value.trim();
                if (message) {
                    console.log("Sending message:", message);
                    // In a real app, send message via WebSocket/API and update UI
                    // Add message to UI (for demo purposes)
                    const chatMessagesContainer = chatOffcanvas.querySelector('.chat-messages');
                    const newMessageDiv = document.createElement('div');
                    newMessageDiv.classList.add('d-flex', 'justify-content-end', 'mb-2');
                    newMessageDiv.innerHTML = `<div class="message-bubble sent p-2 rounded-3 text-white">${message}</div>`;
                    chatMessagesContainer.appendChild(newMessageDiv);
                    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight; // Scroll to bottom
                    chatInput.value = ''; // Clear input
                }
            });

            // Allow sending message with Enter key
            chatInput.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    sendButton.click();
                }
            });
        }
    }

    // --- Sign In Page Specific Logic ---
    // This part will only run if the current page is signin.html
    if (window.location.pathname.includes('signin.html')) {
        console.log("Sign In page JavaScript loaded.");
        const socialLoginBtns = document.querySelectorAll('.social-login-btn');
        socialLoginBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const provider = this.innerText.includes('Google') ? 'Google' : 'LinkedIn';
                console.log(`Attempting social login with: ${provider} on signin.html`);
                // In a real app, this would initiate the OAuth flow
            });
        });

        const loginForm = document.querySelector('.signin-container form');
        if (loginForm) {
            loginForm.addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent default form submission
                const email = document.getElementById('emailInput').value;
                const password = document.getElementById('passwordInput').value;
                console.log(`Attempting email/password login for: ${email} on signin.html`);
                // In a real app, send credentials to backend (e.g., Supabase Auth)
                // On success, redirect to dashboard
                // window.location.href = 'dashboard.html';
            });
        }
    }

    // --- Jobs Page Specific Logic ---
    // This part will only run if the current page is jobs.html
    if (window.location.pathname.includes('jobs.html')) {
        console.log("Jobs page JavaScript loaded.");
        const applyButtons = document.querySelectorAll('.job-listing-bar .btn-apply-listing');
        applyButtons.forEach(button => {
            button.addEventListener('click', function() {
                const jobTitle = this.closest('.job-listing-bar').querySelector('.job-title').innerText;
                console.log(`Applying for job: ${jobTitle}`);
                // In a real app, this would trigger an application process (e.g., redirect to application form)
                // alert(`You clicked Apply Now for: ${jobTitle}`);
            });
        });

        const filterApplyButton = document.querySelector('.filter-sidebar .btn-primary');
        if (filterApplyButton) {
            filterApplyButton.addEventListener('click', function() {
                const keywords = document.getElementById('filterKeyword').value;
                const location = document.getElementById('filterLocation').value;
                const jobTypes = Array.from(document.querySelectorAll('input[type="checkbox"][id^="filter"]:checked')).map(cb => cb.value);
                const experienceLevel = document.querySelector('input[type="radio"][name="experienceLevel"]:checked')?.value;
                const salary = document.getElementById('filterSalary').value;

                console.log(`Applying filters:
                    Keywords: ${keywords}
                    Location: ${location}
                    Job Types: ${jobTypes.join(', ')}
                    Experience Level: ${experienceLevel}
                    Salary: ${salary}`);
                // In a real app, this would trigger an API call to filter job listings
            });
        }

        const filterClearButton = document.querySelector('.filter-sidebar .btn-outline-secondary');
        if (filterClearButton) {
            filterClearButton.addEventListener('click', function() {
                document.getElementById('filterKeyword').value = '';
                document.getElementById('filterLocation').value = '';
                document.getElementById('filterSalary').value = 'Any';
                document.querySelectorAll('input[type="checkbox"][id^="filter"]').forEach(cb => cb.checked = false);
                document.querySelectorAll('input[type="radio"][name="experienceLevel"]').forEach(rb => rb.checked = false);
                console.log("Filters cleared.");
                // In a real app, this would reset job listings
            });
        }
    }

    // --- Post Job Page Specific Logic ---
    // This part will only run if the current page is post-job.html
    if (window.location.pathname.includes('post-job.html')) {
        console.log("Post Job page JavaScript loaded.");
        const postJobForm = document.getElementById('postJobForm');
        if (postJobForm) {
            postJobForm.addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent default form submission

                // Gather form data
                const jobTitle = document.getElementById('jobTitle').value;
                const companyName = document.getElementById('companyName').value;
                const companyWebsite = document.getElementById('companyWebsite').value;
                const jobLocation = document.getElementById('jobLocation').value;
                const jobType = document.getElementById('jobType').value;
                const jobCategory = document.getElementById('jobCategory').value;
                const salaryRange = document.getElementById('salaryRange').value;
                const jobDescription = document.getElementById('jobDescription').value;
                const applicationInstructions = document.getElementById('applicationInstructions').value;
                const contactEmail = document.getElementById('contactEmail').value;

                // Log the data (in a real app, you'd send this to a backend API)
                console.log('New Job Post Data:', {
                    jobTitle,
                    companyName,
                    companyWebsite,
                    jobLocation,
                    jobType,
                    jobCategory,
                    salaryRange,
                    jobDescription,
                    applicationInstructions,
                    contactEmail
                });

                // Simulate success message or redirect
                alert('Job posted successfully! (This is a simulation)');
                // In a real application, after successful submission, you might:
                // - Clear the form: postJobForm.reset();
                // - Redirect to a "Job Posted Confirmation" page: window.location.href = 'job-posted-success.html';
                // - Show a success message on the current page.
            });
        }
    }

    // --- Companies Page Specific Logic ---
    // This part will only run if the current page is companies.html
    if (window.location.pathname.includes('companies.html')) {
        console.log("Companies page JavaScript loaded.");
        const loadMoreBtn = document.querySelector('.companies-page .btn-primary');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', function() {
                console.log("Loading more companies...");
                // In a real app, you'd fetch more company data from an API and append it to the page
                // For now, it's just a log.
            });
        }

        const viewProfileBtns = document.querySelectorAll('.company-listing-card .btn-outline-primary');
        viewProfileBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const companyName = this.closest('.company-listing-card').querySelector('.card-title').innerText;
                console.log(`Viewing profile for company: ${companyName}`);
                // In a real app, redirect to a specific company profile page:
                // window.location.href = `/company-profile.html?name=${encodeURIComponent(companyName)}`;
            });
        });
    }
});
