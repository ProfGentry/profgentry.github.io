        function openTab(evt, tabName) {
            var tabContents = document.getElementsByClassName("tab-content");
            for (var i = 0; i < tabContents.length; i++) {
                tabContents[i].classList.remove("active");
            }

            var tabs = document.getElementsByClassName("tab");
            for (var i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove("active");
            }

            document.getElementById(tabName).classList.add("active");
            evt.currentTarget.classList.add("active");

        }

       function copyPrompt(button) {
            var promptBox = button.parentElement;
            var preElement = promptBox.querySelector('pre');
            var text = preElement.textContent;

            navigator.clipboard.writeText(text).then(function() {
                var originalText = button.textContent;
                button.textContent = '✅ Copied!';
                button.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
                
                setTimeout(function() {
                    button.textContent = originalText;
                    button.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                }, 2000);
            }).catch(function(err) {
                console.error('Failed to copy text: ', err);
                alert('Copy failed. Please select and copy manually.');
            });
        }

       
