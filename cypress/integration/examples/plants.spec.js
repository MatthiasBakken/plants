// write tests here
describe( 'WATER MY PLANTS', () => {
  beforeEach( () => {
    cy.visit( 'http://localhost:3000/login' );
    localStorage.clear();
  } )
  
  it ( 'sanity checks', () => {
    expect( 10 ).to.equal( 10 );
    expect( 1 + 2 ).to.equal( 3 );
    expect( {} ).to.eql( {} );
    expect( 1 + 2 ).to.equal( 4 - 1 );
  } );

  /********* HEADER-LOGGED-OUT *** HEADER-LOGGED-OUT *** HEADER-LOGGED-OUT *********/

  // Header: Benign elements
  const headerContainerDiv = () => cy.get( `div[class="header"]` );
  const headerLogoH1 = () => cy.get( `h1[class="headerLogo"]` );
  const headerSettingsIcon = () => cy.get( `RiSettings3Line[class="set-icon"]` );
  const headerSettingsIconLbl = () => cy.get( `span[class="set"]` );
  const headerLogoutIconLbl = () => cy.get( `span[class="log"]` );

  // Header: Buttons/Links
  const headerSettingsLink = () => cy.get( `a[href="/settings"]` );
  const headerLogoutLink = () => cy.get( `RiShutDownLine[class="log-icon"]` );

  it( 'HEADER-LOGGED-OUT: all benign elements do/dont exist', () => {
    headerContainerDiv()
      .should( 'exist' );
    headerLogoH1()
      .should( 'exist' );
    headerLogoH1().should( ( $h1 ) => {
      expect( $h1.get( 0 ).innerText ).to.eq( 'LOGIN' );
    } );
    headerLogoH1().should( ( $h1 ) => {
      expect( $h1.get( 0 ).innerText ).to.not.eq( 'SETTINGS' );
    } );
    headerLogoH1().should( ( $h1 ) => {
      expect( $h1.get( 0 ).innerText ).to.not.eq( 'PLANTS' );
    } );
    headerLogoH1().should( ( $h1 ) => {
      expect( $h1.get( 0 ).innerText ).to.not.eq( 'ADD A PLANT' );
    } );
    headerLogoH1().should( ( $h1 ) => {
      expect( $h1.get( 0 ).innerText ).to.not.eq( 'EDIT YOUR PLANT' );
    } );
    headerLogoH1().should( ( $h1 ) => {
      expect( $h1.get( 0 ).innerText ).to.not.eq( 'CREATE ACCOUNT' );
    } );
    headerLogoH1().should( ( $h1 ) => {
      expect( $h1.get( 0 ).innerText ).to.not.eq( 'HOME' );
    } );
    headerSettingsIcon()
      .should( 'not.exist' );
    headerSettingsIconLbl()
      .should( 'not.exist' );
    headerLogoutIconLbl()
      .should( 'not.exist' );
  } );
  
  it( 'HEADER-LOGGED-OUT: all buttons and links do/dont exist', () => {
    headerSettingsLink()
      .should( 'exist' );
    headerLogoutLink()
      .should( 'not.exist' );
  } )
  

  /********* MENU-LOGGED-OUT *** MENU-LOGGED-OUT *** MENU-LOGGED-OUT *********/

  // Menu: Benign elements
  const menuContainerDiv = () => cy.get( `div[class="menu-container"]` );
  const menuIconLabel = () => cy.get( `label[class="sidebarIconToggle"]` );
  const menuIconDiv1 = () => cy.get( `div[class="spinner diagonal part-1"]` );
  const menuIconDiv2 = () => cy.get( `div[class="spinner horizontal"]` );
  const menuIconDiv3 = () => cy.get( `div[class="spinner diagonal part-2"]` );
  const menuSidebarDiv = () => cy.get( `div[id="sidebarMenu"]` );
  const menuSidebarInnerUl = () => cy.get( `ul[class="sidebarMenuInner"]` );
  const menuTitleLi = () => cy.get( `li[class="menu-title"]` );
  const menuOptionHome = () => cy.get( `li[class="menu-home"]` );
  const menuOptionPlants = () => cy.get( `li[class="menu-plants"]` );
  const menuOptionCreate = () => cy.get( `li[class="menu-create"]` );
  const menuOptionSettings = () => cy.get( `li[class="menu-settings"]` );
  const menuOptionLogout = () => cy.get( `li[class="menu-logout"]` );

  // Menu: Buttons/Links
  const menuOpenIcon = () => cy.get( `input[class="openSidebarMenu"]` );
  const menuLinkHome = () => cy.get( `a[href="/"]` );
  const menuLinkPlants = () => cy.get( `a[href="/plants"]` );
  const menuLinkCreate = () => cy.get( `a[href="/create-plant"]` );
  const menuLinkSettings = () => cy.get( `a[href="/settings"]` );
  const menuLinkLogout = () => cy.get( `li[class="menu-logout"]` );

  it( 'MENU-LOGGED-OUT: all benign elements do/dont exist', () => {
    menuContainerDiv()
      .should( 'exist' );
    menuIconLabel()
      .should( 'exist' );
    menuIconDiv1()
      .should( 'exist' );
    menuIconDiv2()
      .should( 'exist' );
    menuIconDiv3()
      .should( 'exist' );
    menuSidebarDiv()
      .should( 'exist' );
    menuSidebarInnerUl()
      .should( 'exist' );
    menuTitleLi().should( ( $li ) => {
      expect( $li.get( 0 ).innerText ).to.eq( 'PLANTS\nMENU OPTIONS' );
    } );
    menuOptionHome().should( ( $li ) => {
      expect( $li.get( 0 ).innerText ).to.eq( 'HOME' );
    } );
    menuOptionPlants().should( ( $li ) => {
      expect( $li.get( 0 ).innerText ).to.eq( 'PLANTS' );
    } );
    menuOptionCreate().should( ( $li ) => {
      expect( $li.get( 0 ).innerText ).to.eq( 'CREATE PLANT' );
    } );
    menuOptionSettings().should( ( $li ) => {
      expect( $li.get( 0 ).innerText ).to.eq( 'SETTINGS' );
    } );
    menuOptionLogout().should( ( $li ) => {
      expect( $li.get( 0 ).innerText ).to.eq( 'LOGOUT' );
    } );
  } );

  it( 'MENU-LOGGED-OUT: all buttons/links do/dont exist', () => {
    menuOpenIcon()
      .should( 'exist' );
    menuLinkHome()
      .should( 'exist' );
    menuLinkPlants()
      .should( 'exist' );
    menuLinkCreate()
      .should( 'exist' );
    menuLinkSettings()
      .should( 'exist' );
    menuLinkLogout()
      .should( 'exist' );
  })


  /********* LOGIN *** LOGIN *** LOGIN *** LOGIN *** LOGIN *** LOGIN *********/

  // Login: Benign elements
  const loginContainerDiv = () => cy.get( `div[class="login-container"]` );
  const loginFormContainerDiv = () => cy.get( `div[class="form-container"]` );
  const loginForm = () => cy.get( `form[class="login_form"]` );
  const loginUsernameLabel = () => cy.get( 'label' ).contains( `Username: ` );
  const loginPasswordLabel = () => cy.get( 'label' ).contains( `Password: ` );
  const loginCreateAccountDiv = () => cy.get( `div[class="create-account-link-container"]` );
  const loginCreateAccountPar = () => cy.get( `p[class="create-account-link"]` );
  const loginErrorDivs = () => cy.get( `div[class="error-div"]` );

  // Login: inputs
  const loginUsernameInput = () => cy.get( `input[name="username"]` );
  const loginPasswordInput = () => cy.get( `input[name="password"]` );

  // Login: Buttons/Links
  const loginSubmitButton = () => cy.get( `button[class="login_button"]` );
  const loginCreateAccountLink = () => cy.get( `a[href="/signup"]` );

  it( 'LOGIN: all benign elements do/dont exist (error elements checked during input tests)', () => {
    loginContainerDiv()
      .should( 'exist' );
    loginFormContainerDiv()
      .should( 'exist' );
    loginForm()
      .should( 'exist' );
    loginUsernameLabel()
      .should( 'exist' );
    loginPasswordLabel()
      .should( 'exist' );
    loginCreateAccountDiv()
      .should( 'exist' );
    loginCreateAccountPar()
      .should( 'exist' );
    loginErrorDivs()
      .should( 'not.exist' );
  } );

  it( 'LOGIN: all inputs, buttons and links do/dont exist', () => {
    loginUsernameInput()
      .should( 'exist' );
    loginPasswordInput()
      .should( 'exist' );
    loginSubmitButton()
      .should( 'exist' );
    loginSubmitButton()
      .should( 'be.disabled' );
    loginCreateAccountLink()
      .should( 'exist' );
  })


  /********* LOGIN *** LOGIN *** LOGIN *** LOGIN *** LOGIN *** LOGIN *********/
  /********* LOGIN *** LOGIN *** LOGIN *** LOGIN *** LOGIN *** LOGIN *********/
  /********* LOGIN *** LOGIN *** LOGIN *** LOGIN *** LOGIN *** LOGIN *********/
  /********* LOGIN *** LOGIN *** LOGIN *** LOGIN *** LOGIN *** LOGIN *********/
  /********* LOGIN *** LOGIN *** LOGIN *** LOGIN *** LOGIN *** LOGIN *********/
  /********* LOGIN *** LOGIN *** LOGIN *** LOGIN *** LOGIN *** LOGIN *********/
  /********* LOGIN *** LOGIN *** LOGIN *** LOGIN *** LOGIN *** LOGIN *********/
  /********* LOGIN *** LOGIN *** LOGIN *** LOGIN *** LOGIN *** LOGIN *********/
  /********* LOGIN *** LOGIN *** LOGIN *** LOGIN *** LOGIN *** LOGIN *********/
  /********* LOGIN *** LOGIN *** LOGIN *** LOGIN *** LOGIN *** LOGIN *********/
} );