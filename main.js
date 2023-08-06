
function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
    let highlightedContent = htmlContent;
  
    plainTextPositions.forEach(position => {
      const plainTextToHighlight = plainText.substring(position.start, position.end);
      const highlightedText = `<mark>${plainTextToHighlight}</mark>`;
      highlightedContent = highlightedContent.replace(plainTextToHighlight, highlightedText);
    });
  
    return highlightedContent;
  }
  
  
module.exports = highlightHTMLContent;

  