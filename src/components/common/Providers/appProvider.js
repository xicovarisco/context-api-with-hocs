import React, { Component } from 'react';
import { PricingModal, Snackbar } from 'src/components/common';

// Create a new context for the app
export const AppContext = React.createContext('app');

// Creates a provider Component
class AppProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openPricingModal: false,
            snackbar: {
                open: false,
                message: ''
            }
        };

        this.onOpenPricingModal = this.onOpenPricingModal.bind(this);
        this.onSnackBarMessage = this.onSnackBarMessage.bind(this);
    }

    onOpenPricingModal() {
        this.setState({ openPricingModal: true });
    }

    onSnackBarMessage(message) {
        this.setState({
            snackbar: {
                open: true,
                message
            }
        });
    }

    render() {
        return (
            <AppContext.Provider
                value={{
                    state: this.state,
                    onOpenPricingModal: this.onOpenPricingModal,
                    onSnackBarMessage: this.onSnackBarMessage
                }}
            >
                {this.props.children}
                <PricingModal
                    open={this.state.openPricingModal}
                    onClose={() => this.setState({ openPricingModal: false })}
                />
                <Snackbar
                    snackbarOpen={this.state.snackbar.open}
                    snackbarMessage={this.state.snackbar.message}
                    snackbarHandleRequestClose={() => {
                        this.setState({
                            snackbar: {
                                open: false,
                                message: ''
                            }
                        });
                    }}
                />
            </AppContext.Provider>
        );
    }
}

export default AppProvider;
