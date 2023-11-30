let currentDate = new Date();

let options = {
    year: 'numeric',       // 'numeric', '2-digit'
    month: 'long',         // 'numeric', '2-digit', 'long', 'short', 'narrow'
    day: 'numeric',        // 'numeric', '2-digit'
    hour: 'numeric',       // 'numeric', '2-digit'
    minute: 'numeric',     // 'numeric', '2-digit'
  };
  
  // Format the date
  let formattedDate = currentDate.toLocaleDateString('en-US', options);


// Divide Date.now() with a year
document.getElementById("dateNow").innerHTML = formattedDate;



document.addEventListener('DOMContentLoaded', function() {
  const downloadButton = document.getElementById('downloadButton');
  const loader = document.getElementById('loader');
  const preview = document.getElementById('previewButton');

  preview.addEventListener('click',function(){
    window.print()
  });


  downloadButton.addEventListener('click', function() {
    loader.classList.add('showLoader');
    const element = document.querySelector('.invoice'); // This can be any HTML element you want to convert to PDF
      
      html2pdf(element, {
        filename: 'user-data.pdf',
        image: { type: 'jpeg', quality: 1.0 }, // Set quality to 1.0 for maximum quality
        html2canvas: { scale: 10 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', compress: true } // Use compress for better quality
    }).then((value)=>{
      loader.classList.remove('showLoader')
    });

  
  });
});

