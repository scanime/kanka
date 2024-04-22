/* Error display */
function addError( elemError, sMessage ) {
  elemNew = elemError.appendChild( document.createElement( 'div' ) );
  elemNew.classList.add( 'sw-error' );
  elemNew.innerHTML = sMessage;                              
}

/* Set custom skills */
let sSkill = '', aSkill = [];
for (let i = 1; i <= 10; i++) {
    if( document.querySelector( '.dice-wrapper.sk-custom' + i + ' > .char-label' ) ) {    
        sSkill = document.querySelector( '.dice-wrapper.sk-custom' + i + ' > .char-label' ).innerHTML;
        if( typeof sSkill !== 'undefined' && sSkill.trim() != '' ) {
            aSkill = sSkill.trim().split("|");
            if( aSkill.length == 3 ) {
                document.querySelector( '.dice-wrapper.sk-custom' + i + ' > .char-label' ).innerHTML = aSkill[0];
                document.querySelector( '.dice-wrapper.sk-custom' + i + ' > .linked-attr' ).innerHTML = '(' + aSkill[1] + '.)';
                document.querySelector( '.dice-wrapper.sk-custom' + i + ' > .value' ).innerHTML = aSkill[2];
                document.querySelector( '.dice-wrapper.sk-custom' + i ).classList.add( aSkill[2] );        
            }
            /* Error */
            else {
                document.querySelector( '.dice-wrapper.sk-custom' + i + ' > .char-label' ).innerHTML = aSkill[0];
                document.querySelector( '.dice-wrapper.sk-custom' + i + ' > .linked-attr' ).innerHTML = '';
                document.querySelector( '.dice-wrapper.sk-custom' + i + ' > .value' ).innerHTML = '';
                addError( document.querySelector( '.dice-wrapper.sk-custom' + i + ' > .value' ), 'Wrong number of parameters' );
            }          
        }
    }
}

/* Alphabetize all skills together */
let aSkills = [], elemSkill = null, elemParent = document.querySelector( '.skill-details' );
document.querySelectorAll( ".skill-details > .dice-wrapper > .char-label" ).forEach( (element) => { aSkills.push( element.innerHTML ); element.parentElement.setAttribute( "data-skill", element.innerHTML ) } );
aSkills.sort();
aSkills.forEach( (sName) => { 
    if( typeof sName !== "undefined" ) { 
        elemSkill = document.querySelector( '.skill-details > .dice-wrapper[data-skill="' + sName + '"]' ); 
        elemParent.appendChild( elemSkill ); 
     } 
} );  
/* Alphabetize core skills separately */
if( document.querySelector( "input#alphabetize" ).value != 'true' ) {
    let aSkills = [], elemSkill = null, elemParent = document.querySelector( '.skill-details' ), elemFirst  = document.querySelector( ".skill-details > .dice-wrapper:not(.core-skill)" );
    document.querySelectorAll( ".skill-details > .dice-wrapper.core-skill > .char-label" ).forEach( (element) => { aSkills.push( element.innerHTML ); element.parentElement.setAttribute( "data-skill", element.innerHTML ) } );
    aSkills.sort();
    aSkills.forEach( (sName) => { 
        if( typeof sName !== "undefined" ) { 
            elemSkill = document.querySelector( '.skill-details > .dice-wrapper.core-skill[data-skill="' + sName + '"]' ); 
            elemParent.insertBefore( elemSkill, elemFirst ); 
        } 
    } );  	
}

/* Set custom flavor stats */
let aStat = [], sStat = '';
for (let i = 1; i <= 3; i++) {
    if( document.querySelector( '#custom-flavor-label-' + i ) ) {        
        sStat = document.querySelector( '#custom-flavor-label-' + i ).innerHTML;
        if( typeof sStat !== 'undefined' && sStat.trim() != '' ) {
            aStat = sStat.trim().split("|");
            if( aStat.length == 2 ) {              
                document.querySelector( '#custom-flavor-label-' + i ).innerHTML = aStat[0];
                document.querySelector( '#custom-flavor-value-' + i ).innerHTML = aStat[1];
            }
            /* Error */
            else {
                document.querySelector( '#custom-flavor-label-' + i ).innerHTML = aStat[0];
                document.querySelector( '#custom-flavor-value-' + i ).innerHTML = '';
                addError( document.querySelector( '#custom-flavor-value-' + i ), 'Wrong number of parameters' );
            }           
        }
    }
}

/* Set custom derived stats */
for (let i = 1; i <= 3; i++) {
    if( document.querySelector( '#custom-derived-label-' + i ) ) {        
        sStat = document.querySelector( '#custom-derived-label-' + i ).innerHTML;
        if( typeof sStat !== 'undefined' && sStat.trim() != '' ) {
            aStat = sStat.trim().split("|");
            if( aStat.length == 2 ) {
                document.querySelector( '#custom-derived-label-' + i ).innerHTML = aStat[0];
                document.querySelector( '#custom-derived-value-' + i ).innerHTML = aStat[1];
            }
            /* Error */
            else {
                document.querySelector( '#custom-derived-label-' + i ).innerHTML = aStat[0];
                document.querySelector( '#custom-derived-value-' + i ).innerHTML = '';
                addError( document.querySelector( '#custom-derived-value-' + i ), 'Wrong number of parameters' );
            }            
        }
    }
}

/* Remove powers section if there aren't any */
if( document.querySelector( '.powers.powers-simple > .powers-details' ) ) {
    if( document.querySelector( '.powers.powers-simple > .powers-details' ).innerHTML.trim() == '' ) {
        document.querySelector( '.powers.powers-simple' ).remove();
    }
}
if( document.querySelectorAll( '.powers.powers-complex > .powers-details > .power-name' ) )
{
    if( document.querySelectorAll( '.powers.powers-complex > .powers-details > .power-name' ).length <= 1 ) {
        document.querySelector( '.powers.powers-complex' ).remove();
    }
    /* Handle powers */
    else {
        let sPower = '', aPower = [];
        for (let i = 1; i <= 20; i++) {
            if( document.querySelector( '#power-name-' + i ) ) {        
                sPower = document.querySelector( '#power-name-' + i ).innerHTML;
                if( typeof sPower !== 'undefined' && sPower.trim() != '' ) {
                    aPower = sPower.trim().split("|");
                    if( aPower.length == 5 ) {
                        document.querySelector( '#power-name-' + i ).innerHTML = aPower[0];
                        document.querySelector( '#power-pp-' + i ).innerHTML = aPower[1];
                        document.querySelector( '#power-range-' + i ).innerHTML = aPower[2];
                        document.querySelector( '#power-duration-' + i ).innerHTML = aPower[3];
                        document.querySelector( '#power-effect-' + i ).innerHTML = aPower[4];
                    }
                    /* Error */
                    else {
                        document.querySelector( '#power-name-' + i ).innerHTML = aPower[0];
                        addError( document.querySelector( '#power-name-' + i ), 'Wrong number of parameters' );
                    }                                        
                }
            }
        }        
    }
}

/* Remove weapons section if there aren't any */
if( document.querySelectorAll( '.weapons > .weapons-details > .weapon-name' ) )
{
    if( document.querySelectorAll( '.weapons > .weapons-details > .weapon-name' ).length <= 1 ) {
        document.querySelector( '.weapons' ).remove();      
    }
    /* Handle weapons */
    else {
        let sWeapon = '', aWeapon = [];
        for (let i = 1; i <= 20; i++) {
            if( document.querySelector( '#weapon-name-' + i ) ) {        
                sWeapon = document.querySelector( '#weapon-name-' + i ).innerHTML;
                if( typeof sWeapon !== 'undefined' && sWeapon.trim() != '' ) {
                    aWeapon = sWeapon.trim().split("|");
                    /* Melee weapon? */
                    if( aWeapon.length == 4 ) {
                        document.querySelector( '#weapon-name-' + i ).innerHTML = aWeapon[0];
                        document.querySelector( '#weapon-range-' + i ).innerHTML = '';
                        document.querySelector( '#weapon-rof-' + i ).innerHTML = '';
                        document.querySelector( '#weapon-damage-' + i ).innerHTML = aWeapon[1];
                        document.querySelector( '#weapon-ap-' + i ).innerHTML = '';
                        document.querySelector( '#weapon-shots-' + i ).innerHTML = '';
                        document.querySelector( '#weapon-wt-' + i ).innerHTML = aWeapon[2];
                        document.querySelector( '#weapon-notes-' + i ).innerHTML = aWeapon[3];
                    }
                    else if( aWeapon.length == 8 ) {
                        document.querySelector( '#weapon-name-' + i ).innerHTML = aWeapon[0];
                        document.querySelector( '#weapon-range-' + i ).innerHTML = aWeapon[1];
                        document.querySelector( '#weapon-rof-' + i ).innerHTML = aWeapon[2];
                        document.querySelector( '#weapon-damage-' + i ).innerHTML = aWeapon[3];
                        document.querySelector( '#weapon-ap-' + i ).innerHTML = aWeapon[4];
                        document.querySelector( '#weapon-shots-' + i ).innerHTML = aWeapon[5];
                        document.querySelector( '#weapon-wt-' + i ).innerHTML = aWeapon[6];
                        document.querySelector( '#weapon-notes-' + i ).innerHTML = aWeapon[7];
                    } 
                    /* Error */
                    else {
                        document.querySelector( '#weapon-name-' + i ).innerHTML = aWeapon[0];
                        addError( document.querySelector( '#weapon-name-' + i ), 'Wrong number of parameters' );
                    }                      
                }
            }
        }             
    }
}
