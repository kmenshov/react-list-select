import React from 'react'
import cx from 'classnames'
import {SortableElement, SortableHandle} from 'react-sortable-hoc'

// const DragHandle = SortableHandle(() => <div className="o-drag-handle" />);
const DragHandle = SortableHandle(() => <div>+</div>);

const SortableItem = SortableElement(({classes, onMouseOver, onClick, value}) =>
	<li className={classes}
		onMouseOver={onMouseOver}
		onClick={onClick}>
		<DragHandle />
		{value}
	</li>
);

let ListItem = React.createClass({
	getDefaultProps() {
		return {
			disabled: false,
			selected: false,
			focused: false,
		}
	},

	render() {
		let classes = cx('react-list-select--item', {
			'is-disabled': this.props.disabled,
			'is-selected': this.props.selected,
			'is-focused': this.props.focused,
		});

		return <SortableItem
					 	 index={this.props.index}
						 value={this.props.children}
						 classes={classes}
						 onMouseOver={() => this.props.onMouseOver(this.props.index)}
						 onClick={(event) => this.props.onChange({event, index: this.props.index})}
					 />;
	}
})

export default ListItem
