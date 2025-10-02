// Blog page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Blog post data
    const blogPosts = [
        {
            id: 1,
            title: "Masa Depan Pembelajaran Digital di Indonesia",
            description: "Mengeksplorasi bagaimana teknologi pendidikan canggih mentransformasi lanskap pembelajaran di seluruh institusi Indonesia.",
            date: "15 Maret 2025",
            category: "Teknologi Pendidikan",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
        },
        {
            id: 2,
            title: "Masa Depan Pembelajaran Digital di Indonesia",
            description: "Mengeksplorasi bagaimana teknologi pendidikan canggih mentransformasi lanskap pembelajaran di seluruh institusi Indonesia.",
            date: "15 Maret 2025",
            category: "Teknologi Pendidikan",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
        },
        {
            id: 3,
            title: "Masa Depan Pembelajaran Digital di Indonesia",
            description: "Mengeksplorasi bagaimana teknologi pendidikan canggih mentransformasi lanskap pembelajaran di seluruh institusi Indonesia.",
            date: "15 Maret 2025",
            category: "Teknologi Pendidikan",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
        },
        {
            id: 4,
            title: "Masa Depan Pembelajaran Digital di Indonesia",
            description: "Mengeksplorasi bagaimana teknologi pendidikan canggih mentransformasi lanskap pembelajaran di seluruh institusi Indonesia.",
            date: "15 Maret 2025",
            category: "Teknologi Pendidikan",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
        },
        {
            id: 5,
            title: "Masa Depan Pembelajaran Digital di Indonesia",
            description: "Mengeksplorasi bagaimana teknologi pendidikan canggih mentransformasi lanskap pembelajaran di seluruh institusi Indonesia.",
            date: "15 Maret 2025",
            category: "Teknologi Pendidikan",
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&crop=center"
        },
        {
            id: 6,
            title: "Masa Depan Pembelajaran Digital di Indonesia",
            description: "Mengeksplorasi bagaimana teknologi pendidikan canggih mentransformasi lanskap pembelajaran di seluruh institusi Indonesia.",
            date: "15 Maret 2025",
            category: "Teknologi Pendidikan",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
        },
        {
            id: 7,
            title: "Masa Depan Pembelajaran Digital di Indonesia",
            description: "Mengeksplorasi bagaimana teknologi pendidikan canggih mentransformasi lanskap pembelajaran di seluruh institusi Indonesia.",
            date: "15 Maret 2025",
            category: "Teknologi Pendidikan",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
        },
        {
            id: 8,
            title: "Masa Depan Pembelajaran Digital di Indonesia",
            description: "Mengeksplorasi bagaimana teknologi pendidikan canggih mentransformasi lanskap pembelajaran di seluruh institusi Indonesia.",
            date: "15 Maret 2025",
            category: "Teknologi Pendidikan",
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&crop=center"
        },
        {
            id: 9,
            title: "Masa Depan Pembelajaran Digital di Indonesia",
            description: "Mengeksplorasi bagaimana teknologi pendidikan canggih mentransformasi lanskap pembelajaran di seluruh institusi Indonesia.",
            date: "15 Maret 2025",
            category: "Teknologi Pendidikan",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
        },
        {
            id: 10,
            title: "Masa Depan Pembelajaran Digital di Indonesia",
            description: "Mengeksplorasi bagaimana teknologi pendidikan canggih mentransformasi lanskap pembelajaran di seluruh institusi Indonesia.",
            date: "15 Maret 2025",
            category: "Teknologi Pendidikan",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
        },
        {
            id: 11,
            title: "Masa Depan Pembelajaran Digital di Indonesia",
            description: "Mengeksplorasi bagaimana teknologi pendidikan canggih mentransformasi lanskap pembelajaran di seluruh institusi Indonesia.",
            date: "15 Maret 2025",
            category: "Teknologi Pendidikan",
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&crop=center"
        },
        {
            id: 12,
            title: "Masa Depan Pembelajaran Digital di Indonesia",
            description: "Mengeksplorasi bagaimana teknologi pendidikan canggih mentransformasi lanskap pembelajaran di seluruh institusi Indonesia.",
            date: "15 Maret 2025",
            category: "Teknologi Pendidikan",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
        }
    ];

    // State
    let currentPage = 1;
    let rowsPerPage = 10;
    let searchQuery = '';
    let selectedCategory = null;

    // DOM elements
    const blogPostsGrid = document.getElementById('blog-posts-grid');
    const searchInput = document.getElementById('search-input');
    const rowsPerPageSelect = document.getElementById('rows-per-page');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const paginationNumbers = document.getElementById('pagination-numbers');
    const categoryBtns = document.querySelectorAll('.category-btn');

    // Filter posts based on search and category
    function getFilteredPosts() {
        return blogPosts.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  post.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = !selectedCategory || post.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }

    // Render blog posts
    function renderBlogPosts() {
        const filteredPosts = getFilteredPosts();
        const totalPages = Math.ceil(filteredPosts.length / rowsPerPage);
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        const postsToShow = filteredPosts.slice(startIndex, endIndex);

        blogPostsGrid.innerHTML = '';

        postsToShow.forEach(post => {
            const card = document.createElement('div');
            card.className = 'blog-card';
            card.innerHTML = `
                <div class="aspect-video overflow-hidden">
                    <img
                        src="${post.image}"
                        alt="${post.title}"
                        class="blog-card-image"
                    />
                </div>
                <div style="padding-top: 1rem; padding-bottom: 0.75rem;">
                    <div class="flex items-center space-x-2 text-sm text-gray-500 mb-2" style="padding: 0 1.5rem; margin-top: 1rem;">
                        <span class="blog-card-badge">
                            ${post.category}
                        </span>
                        <span>•</span>
                        <span class="text-xs">${post.date}</span>
                    </div>
                    <h3 class="blog-card-title" style="padding: 0 1.5rem; margin-bottom: 0;">
                        ${post.title}
                    </h3>
                </div>
                <div style="padding: 0.25rem 1.5rem 1rem 1.5rem;">
                    <p class="blog-card-description">
                        ${post.description}
                    </p>
                </div>
            `;
            blogPostsGrid.appendChild(card);
        });

        renderPagination(totalPages);
    }

    // Render pagination
    function renderPagination(totalPages) {
        paginationNumbers.innerHTML = '';

        // Always show page 1
        const page1 = createPageButton(1);
        paginationNumbers.appendChild(page1);

        // Show ellipsis if current page > 3
        if (currentPage > 3) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'pagination-ellipsis';
            ellipsis.textContent = '...';
            paginationNumbers.appendChild(ellipsis);
        }

        // Show current page if it's not 1, 2, or last page
        if (currentPage > 2 && currentPage < totalPages - 1) {
            const currentBtn = createPageButton(currentPage);
            paginationNumbers.appendChild(currentBtn);
        }

        // Show page 2 if current page is 2
        if (currentPage === 2) {
            const page2 = createPageButton(2);
            paginationNumbers.appendChild(page2);
        }

        // Show ellipsis before page 3 if needed
        if (currentPage < totalPages - 2) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'pagination-ellipsis';
            ellipsis.textContent = '...';
            paginationNumbers.appendChild(ellipsis);
        }

        // Show page 3 if total pages > 2
        if (totalPages > 2) {
            const page3 = createPageButton(3);
            paginationNumbers.appendChild(page3);
        }

        // Show ellipsis if total pages > 3
        if (totalPages > 3) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'pagination-ellipsis';
            ellipsis.textContent = '...';
            paginationNumbers.appendChild(ellipsis);
        }

        // Update navigation buttons
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
    }

    // Create page button
    function createPageButton(pageNum) {
        const btn = document.createElement('button');
        btn.className = 'pagination-btn pagination-btn-number';
        if (pageNum === currentPage) {
            btn.classList.add('pagination-btn-active');
        }
        btn.textContent = pageNum;
        btn.addEventListener('click', () => {
            currentPage = pageNum;
            renderBlogPosts();
        });
        return btn;
    }

    // Event listeners
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        currentPage = 1;
        renderBlogPosts();
    });

    rowsPerPageSelect.addEventListener('change', (e) => {
        rowsPerPage = parseInt(e.target.value);
        currentPage = 1;
        renderBlogPosts();
    });

    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderBlogPosts();
        }
    });

    nextBtn.addEventListener('click', () => {
        const filteredPosts = getFilteredPosts();
        const totalPages = Math.ceil(filteredPosts.length / rowsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderBlogPosts();
        }
    });

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;

            // Toggle category selection
            if (selectedCategory === category) {
                selectedCategory = null;
                btn.classList.remove('active');
            } else {
                // Remove active class from all buttons
                categoryBtns.forEach(b => b.classList.remove('active'));

                selectedCategory = category;
                btn.classList.add('active');
            }

            currentPage = 1;
            renderBlogPosts();
        });
    });

    // Initial render
    renderBlogPosts();
});
