window.onload = function()
{
    let questions = [
        {
            text: " Скільки буде 5*5?",
            variants: [22, 26, 25], 
            answer: 25
        },

        {
            text: " Скільки буде 6*6?",
            variants: [30, 36, 32], 
            answer: 36
        },

        {
            text: " Скільки буде 7*7?",
            variants: [45, 49, 47], 
            answer: 49
        },

        {
            text: " Скільки буде 8*8?",
            variants: [64, 65, 67], 
            answer: 64
        },
    ]

    let text = document.getElementById("main_container");
    let answer = document.getElementById("answer");
    let result = document.getElementById("result");

    let count = 0;
    let correct_answer = 0;

    for (let question of questions)
    {
        count++;

        let new_quest = document.createElement("div");
        new_quest.className = "card";
        let quest_box = document.createElement("div");
        quest_box.className = "card-body";
        let quest_text = document.createElement("div");
        quest_text.className = "card-header";
        quest_text.innerHTML = count + ")" + question.text;

        for (let i = 0; i < question.variants.length; i++)
        {
            let answer_div = document.createElement("div");
            answer_div.className = "form-check";
            let ans = document.createElement("input");
            ans.type = "radio";
            ans.value = question.variants[i];
            ans.name = "question" + count;
            ans.className = "form-check-input";
            ans.setAttribute("id", "quest" + count + "ans" + i);
            
            let label = document.createElement("label");
            label.className = "form-check-label";
            label.innerHTML = question.variants[i];

            answer_div.appendChild(ans);
            answer_div.appendChild(label);
            quest_box.appendChild(answer_div);
        };

        new_quest.appendChild(quest_text);
        new_quest.appendChild(quest_box);
        text.appendChild(new_quest);
    }

    answer.addEventListener("click", function()
    {
        let quest_block = document.getElementsByClassName("card");
        correct_answer = 0;
        for (let i = 0; i < quest_block.length; i++)
        {
            let variants = quest_block[i].querySelectorAll("input[type='radio']");
            for (let j = 0; j < variants.length; j++)
            {
                if (variants[j].checked)
                {
                    if (variants[j].value == questions[i].answer)
                    {
                        correct_answer ++;
                    }
                }
            }
        }

        let percent_result = Math.floor((correct_answer/count) * 100);
        result.innerHTML = "Правильних відповідей - " + correct_answer + ", що є " + percent_result + "%.<br/>";

        if (percent_result >= 70)
        {
            result.innerHTML += "Вітаю, ви пройшли тест.";
            result.className = "alert alert-success"; 
        }
        else
        {
            result.innerHTML += "Ви не пройшли тест.";
            result.className = "alert alert-danger";
        }

        let all_questions = document.querySelectorAll("input[type='radio']");

        for (let i = 0; i < all_questions.length; i++)
        {
            all_questions[i].checked = false;
        }
    }, false)
}