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

            updateProgress(tabName);
        }

        function updateProgress(tabName) {
            var progress = {
                'overview': 0,
                'vmware': 15,
                'kali': 30,
                'config': 55,
                'network': 80,
                'conn':90,
                'complete': 100
            };
            
            var progressBar = document.getElementById('progressBar');
            if (progressBar) {
                progressBar.style.width = progress[tabName] + '%';
            }
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

        document.addEventListener('DOMContentLoaded', function() {
            updateProgress('overview');
        });
    
