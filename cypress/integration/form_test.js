describe('Yum Yum Pizza', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3001/pizza")
    })
    const name = () => cy.get("input[name=name]")
    const size = () => cy.get("select[name=size")
    const instructions = () => cy.get("input[name=instructions]")
    const orderBtn = () => cy.get('button[id="order-button"]');
    const olives = () => cy.get('checkbox[name="olives"]')
    const bacon = () => cy.get('checkbox[name="bacon"]')
    const sausage = () => cy.get('checkbox[name="sausage"]')
    const pepperoni = () => cy.get('checkbox[name="pepperoni"]')
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
        size().select('large')
        pepperoni().check()
        olives().check()
        sausage().check()
        bacon().check()
        instructions().type('This is instruction')
        orderBtn().click()
    })
})
