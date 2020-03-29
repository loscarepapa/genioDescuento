let changeColor = document.getElementById('changeColor');
// let genioInput = document.getElementById('genioInput').value;

document.getElementById('genioInput').addEventListener("change", function(evt){
    if(document.getElementById('genioInput').value >= 10){
        document.getElementById('genioInput').value = 10;
    }else if(document.getElementById('genioInput').value <= 0){
        document.getElementById('genioInput').value = 0;
    }
})

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
    
    if(document.getElementById('genioInput').value >= 10){
        document.getElementById('genioInput').value = 10;
    }else if(document.getElementById('genioInput').value <= 0){
        document.getElementById('genioInput').value = 0;
    }

    let color = element.target.value;

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
            {code: 
                    `
                    console.log(${document.getElementById('genioInput').value});
                    var select = document
                    .body
                    .children[1]
                    .children[1]
                            .children[0]
                            .children[0]
                            .contentWindow
                            .document
                            .body
                            .children[5]
                            .children[0]
                            .children[7]
                            .children[11]
                            .children[1]
                            .children[0]
                            .children[2]
                            .children[1]
                            .children[5]
                            .children[7]
                            .children
                    
                    var lastOption = select[select.length  - 1]
                    
                    var valueOriginal;
                    if(!valueOriginal){
                        valueOriginal = lastOption.value
                    }
                    
                    var valueLastOption = parseInt(valueOriginal)
                    valueLastOption = valueLastOption + ${document.getElementById('genioInput').value}

                    lastOption.value = valueLastOption + ".0"
                    lastOption.textContent = valueLastOption + ".0"

                    console.log(valueLastOption)
                    console.log(lastOption)

                    `
            }
            );
    });
  };