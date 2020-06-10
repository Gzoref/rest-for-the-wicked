import React from "react";
import "./items-mod.css";
import {connect} from "react-redux";
import {TileList} from "../TileList";

export class ItemsModule extends React.Component {
    render() {
        return (
            <section className="inventory-container">
                <div className="title-bar">
                    <h4>{this.props.items.title}</h4>
                </div>
                <TileList
                    module={this.props.items.title}
                    content={this.props.items.content}
                />
            </section>
        );
    }
}

const mapStateToProps = state => {
    return ({
        items: state.droppables.lists.item_list
    });
};

export default connect(
    mapStateToProps
)(ItemsModule);