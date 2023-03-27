import React, { useEffect, useState } from 'react'
import { data } from '../data'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const ModelsSection = () => {

    const [modelId, setModelId] = useState(1)
    const [model, setModel] = useState()
    useEffect(() => {
        setModel(data.find(model => model.id === modelId))
    }, [modelId])

    const anchor = true

    const [view, setView] = useState(true)
    const [details, setDetails] = useState(false)

    const onChangeHandler = (e) => {
        setModelId(parseInt(e.target.value))
        setView(true)
        setDetails(false)
    }

    const keyListener =  (e) => {
        if(e.key === 'ArrowRight'){
            let index = data && model ? data.indexOf(data.find(el => el.id === model.id)) : null
            if(data && index < data.length - 1){
                setModelId(data[index + 1].id)
                setModel(data[index + 1])
                setView(true)
                setDetails(false)
            } 
        } else if( e.key === 'ArrowLeft' && model){
            let index = data?.indexOf(data?.find(el => el.id === model?.id))
            if(index && index > 0){
                setModelId(data[index - 1].id)
                setModel(data[index - 1])
                setView(true)
                setDetails(false)
            }
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', keyListener)

        return () => document.removeEventListener('keydown', keyListener)
    }, [model, modelId, data, keyListener])

    return (
        <div className='models-section'>
            <div className="container d-flex flex-column align-items-center justify-content-between">
                <div className="slider">
                    {
                        model ?
                        <SwitchTransition mode='out-in'>
                            <CSSTransition
                                key={model.id}
                                classNames={'fade'}
                                timeout={500}
                            >
                                <div className='display-section'>
                                    <div className='view-switch d-flex justify-content-center'>
                                        <span className={view ? 'me-4 active' : 'me-4'} 
                                            onClick={() => {setView(true); setDetails(false)}}
                                            style={view ? {cursor: 'default'} : {}}
                                        >
                                            View
                                        </span>
                                        <span className={details ? 'active' : ''} 
                                            onClick={() => {setView(false); setDetails(true)}}
                                            style={details ? {cursor: 'default'} : {}}
                                        >
                                            Details
                                        </span>
                                    </div>
                                    {
                                        anchor && 
                                        <div className='d-flex' style={{height: 'inherit'}}>
                                            {/* <SwitchTransition mode='out-in'>
                                                <CSSTransition
                                                    key={view}
                                                    classNames={'view'}
                                                    timeout={200}
                                                > */}
                                                   {
                                                        view ?
                                                        model && view && 
                                                        <div className="d-flex justify-content-center image-container">
                                                            <img className='model-image' src={model.image} alt="img"/>
                                                        </div>
                                                        : details &&
                                                        <div className='specification mt-3 pt-3 table-responsive'>
                                                            <div className="mb-4">
                                                                {model.description}
                                                            </div>
                                                            <hr style={{border: '1px solid white'}} />
                                                            <div className="">
                                                                {model.specification?.map((object, i) => (
                                                                    <div key={i} className='d-flex'>
                                                                        <p className="col-3">{object.name}</p>
                                                                        <p className="col">{object.value}</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>     
                                                   }
                                                {/* </CSSTransition>
                                            </SwitchTransition> */}
                                        </div> 
                                    }
                                </div>
                            </CSSTransition>
                        </SwitchTransition>
                        : null
                    }
                </div>
                <div className="models-list mt-4 pt-4">
                    <span className='model-item text-center'>{model?.name}</span>
                </div>
                <div className="select-model pt-4">
                    <select 
                        className='form-control'
                        placeholder='Select model'
                        onChange={onChangeHandler}
                        value={modelId}
                    >
                        {
                            data.map(el => (
                                <option key={el.id} value={el.id}>{el.name}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </div>
    )
}

export default ModelsSection