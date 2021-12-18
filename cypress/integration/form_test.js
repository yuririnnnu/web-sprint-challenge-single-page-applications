describe('Yum Yum Pizza', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3001/pizza-form")
    })
    const name = () => cy.get("input[name=name]");
    const size = () => cy.get("select[name=size");
    const sauce = () => cy.get("input[type=radio]")
    const instructions = () => cy.get("input[name=instructions]");
    const orderBtn = () => cy.get('button[id="order-button"]');
    const top = () => cy.get("input[type='checkbox']");
    const email = () => cy.get("input[name=email]");
    // - [ ] test that you can add text to the box
    it('Get Name input nad type a name in it', () => {
        name().should('exist');
        name().should('have.value','')
        .type('This is my name')
        .should('have.value', 'This is my name')
    }) 
    // - [ ] test that you can select multiple toppings    
    it('User can select multiple toppings', () => {
        cy.get("input[type='checkbox']").check().should('be.checked')
    })
    
    // - [ ] test that you can submit the form
    it ('Check to see if a user can submit the form data', () => {
        name().type('This is my first name')        
        email().type('aaa@gmail.com')
        sauce().check()
        size().select('large')
        top().check()
        instructions().type('This is instruction')
        orderBtn().click()
    })
})
