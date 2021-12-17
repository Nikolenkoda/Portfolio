import React from "react";

const Skills = () => {
  return (
    <div class="skills">
      <div class="skills__block-row">
        <div class="skills__block-col">
          <h2>My <b>Skills</b></h2>
          <div class="skills__block-tabs">
            <div class="skills__block-tabs__tab">
              <input type="radio" id="rd1" name="rd" />
              <label class="skills__block-tabs__tab-label" for="rd1"><img src="components/logo/js.png"/></label>
              <div class ="skills__block-tabs__tab-content">
              Level - medium. Study time - 1 year
              </div>
            </div>
            <div class="skills__block-tabs__tab">
              <input type="radio" id="rd2" name="rd" />
              <label class ="skills__block-tabs__tab-label" for="rd2"><img src="components/logo/node_js.png"/></label>
              <div class ="skills__block-tabs__tab-content">
              Level - medium. Study time - 2 month
              </div>
            </div>
            <div class="skills__block-tabs__tab">
              <input type="radio" id="rd3" name="rd" />
              <label class ="skills__block-tabs__tab-label" for="rd3"><img src="components/logo/jsx.png"/></label>
              <div class ="skills__block-tabs__tab-content">
              Level - medium. Study time - 2 month
              </div>
            </div>
            <div class="skills__block-tabs__tab">
              <input type="radio" id="rd4" name="rd" />
              <label class ="skills__block-tabs__tab-label" for="rd4"><img src="components/logo/react.png"/></label>
              <div class ="skills__block-tabs__tab-content">
              Level - medium. Study time - 3 month
              </div>
            </div>
            <div class="skills__block-tabs__tab">
              <input type="radio" id="rd5" name="rd" />
              <label class ="skills__block-tabs__tab-label" for="rd5"><img src="components/logo/redux.png"/></label>
              <div class ="skills__block-tabs__tab-content">
              Level - weak.
              </div>
            </div>
            <div class="skills__block-tabs__tab">
              <input type="radio" id="rd6" name="rd" />
              <label class ="skills__block-tabs__tab-label" for="rd6"><img src="components/logo/html.png"/></label>
              <div class ="skills__block-tabs__tab-content">
              Level - hard. Study time - 4 years
              </div>
            </div>
            <div class="skills__block-tabs__tab">
              <input type="radio" id="rd7" name="rd" />
              <label class ="skills__block-tabs__tab-label" for="rd7"><img src="components/logo/css.png"/></label>
              <div class ="skills__block-tabs__tab-content">
              Level - hard. Study time - 4 years
              </div>
            </div>
            <div class="skills__block-tabs__tab">
              <input type="radio" id="rd8" name="rd" />
              <label class ="skills__block-tabs__tab-label" for="rd8"><img src="components/logo/sass.png"/></label>
              <div class ="skills__block-tabs__tab-content">
              Level - hard. Study time - 2 month
              </div>
            </div>
            <div class="skills__block-tabs__tab">
              <input type="radio" id="rd9" name="rd" />
              <label for="rd9" class ="skills__block-tabs__tab-close">Close others &times; </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;