import React from 'react'
import Card_Information from './Card_Information'
import Button_general from './Button_general'


const Information = () => {
    return (
        <>
        <div>
            <div id='OS-information-largescreen' className='container'>
                {/*************** I NEED API FROM BACKEND ***************/}

                        <Card_Information
                            title="Basic Information"
                            margin_1="mt-5"
                            paragraphe_1="Company Name"
                            paragraphe_2="Taplin"
                            paragraphe_3="City"
                            paragraphe_4="Lattakia"
                            paragraphe_5="Year Founded"
                            paragraphe_6="2021-02-18"
                            paragraphe_7="Company Fields"
                            paragraphe_8="Software Services"
                            paragraphe_9="Company Size"
                            paragraphe_10="150 Employees"
                        />
                        <Card_Information
                            title="Contact Information"
                            margin_2="my-3"
                            paragraphe_1="Phone"
                            paragraphe_2="+963 964 516 063"
                            paragraphe_3="Facebook"
                            paragraphe_4="@taplin_33"
                            paragraphe_5="Linked in"
                            paragraphe_6="@taplin_33"
                            paragraphe_7="Company Website"
                            paragraphe_8="www.Taplin.com"
                            paragraphe_9="Behance"
                            paragraphe_10="@taplin_33"
                        />
                    </div>
              
            <div className="col pb-5">
                <Button_general content="Save Information" class="OS-button-card" />
            </div>
        </div>

        </>
    )
}

export default Information