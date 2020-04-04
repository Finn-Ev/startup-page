import React from 'react'
import "./services.styles.scss"
import serviceList from "./service-list"
import ServiceCard from './service-card/service-card.component'



const Services = (props) => {
    return (
        <section className="services-wrapper pt-4" id="services">
            <h3 className="pt-5">Unsere Leistungen</h3>
            <div className="services pt-2 pb-4">

                {serviceList.map(service => (
                    <ServiceCard key={service.id} name={service.name} />
                ))}
            </div>
        </section>

    )
}

export default Services