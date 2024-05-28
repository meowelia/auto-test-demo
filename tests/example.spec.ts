import { test, expect } from '@playwright/test';

test('CSS SELECTOR DEMO', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  /* Clicking Docs link in nav bar.
    This part   a.navbar__item   will search for any <a> tags that HAVE 'navbar__item' in their 'class' attribute.
    This part   [href="/docs/intro"]   is used to filter the result of the part above, in this case it will
    only show any <a> tag that have 'docs/intro' in their 'href' attribute
  */
  await page.locator('a.navbar__item[href="/docs/intro"]').click();

  /* Clicking Docs link in nav bar.
    This part   [href$="welcome"]   will search for any tags that have their 'href' attribute end with 'welcome'.
    If you want to switch to begin with instad of ending with then change '$' to '^'
  */
  await page.locator('[href$="welcome"]').click();

  /* Clicking Docs link in nav bar.
    This part   h2#ambassadors   will search for any <h2> tags that have their 'id' attribute equal to 'ambassadors'.
  */
    await page.locator('h2#ambassadors').click();

  /* To summerize,
     An element can be located with CSS selector 
        by its attributes like 'href', 'type, 'label', etc through the use of [] brackets, 
        by its 'class' attribute with the use of the . character
        by its 'id' attribute with the use of the # character.
     And you can partial match the attributes with the use of 
        '^' for begining and
        '$' for ending
  */
});

test('XPATH DEMO', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  /*
    This is a absolute Xpath expression, it defines a path to a specific element starting from the 
    root element of the document it is precise and provide the exact location of an element. 
    However, they are not flexible because they rely on the exact structure of the document, 
    which means that even minor changes to the document's structure can invalidate the XPath
    This example follows the these tags: 
        <html> to 
        <body> to 
        <div> to 
        <nav> to 
        first <div> to 
        first <div> to 
        fourth <a>
  */
  await page.locator('/html/body/div/nav/div[1]/div[1]/a[4]').count();

  /*
    This is a relative xpath. They do not start from the root element but 
    from a current context node, allowing you to navigate the document tree using relative paths. 
    This flexibility makes relative XPath expressions more adaptable to changes in the document structure.
    This example work like this:
        Any <section> tags
        to any <ul> tags
        to an <img> tag with the attribute 'src' with the value 'img/logos/VSCode.png'
  */
    await page.locator("//section//ul//img[@src='img/logos/VSCode.png']").scrollIntoViewIfNeeded();

  // HERE ARE SOME COMMON XPATH EXPRESSIONS

    // Element text content matching; use text()
    await page.locator('//a[text()="Codegen."]').scrollIntoViewIfNeeded();

    // Element text content containing: combining text() inside of contains()
    await page.locator('//p[contains(text(),"Generate ")]').scrollIntoViewIfNeeded();

    // Element attribute matching: Use @ before and attribute
    await page.locator('//b[@class="navbar__title text--truncate"]').scrollIntoViewIfNeeded();

    // Element attribute containing: combining @ inside of contains()
    await page.locator('//button[contains(@class,"DocSearch")]').scrollIntoViewIfNeeded();

    // Non specified tag name
    await page.locator('//*[@href="https://aka.ms/playwright/discord"]').count();

});